import React from "react";
import Layout from "../components/Layout";
import { client } from "../src/pokko";
import { ILogo, ISocialLink } from "../types/navAndFooter.types";
import { IHero } from "../types/hero.types";
import { IAbout, IAttribute } from "../types/indexPage.types";
import About from "../components/mainPage/About";
import AttributeContainer from "../components/mainPage/AttributeContainer";

const query = require("../src/api/home.graphql");

interface IProps {
  logo: ILogo;
  hero: IHero;
  socialLinks: ISocialLink[];
  about: IAbout
  workedWith: IAttribute[];
  skills: IAttribute[];
}
const Home = ({logo, hero, socialLinks, about, workedWith, skills}:IProps) => {
  return (
    <Layout 
      logo={logo}
      hero={hero}
      socialLinks={socialLinks}
    >
      <About aboutContent={about} />
      <AttributeContainer header="Companies I've worked with" attributes={workedWith} />
      <AttributeContainer header="My Skills" attributes={skills} skills/>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.query({
    query,
  });
  
  const data = res?.data?.entries ?? null;
  if (!data) {
    if (res?.errors) {
      console.warn("**** errors", JSON.stringify(res.errors));
      return { props: {} };
    }

    console.log("**** no data", JSON.stringify(res));
    return { props: {} };
  }

  const aboutData = data.allAbout.nodes[0];
  
  const props:IProps = {
    logo: data.logo,
    hero: {
      title: data.hero.heroTitle,
      subtitle: data.hero.heroSubtitle,
      media: {
        type: "video",
        url: data.hero.heroMedia.url
      }
    },
    socialLinks: data.allSocialLinks.nodes.map(node => {
      return {
        title: node.socialLinkTitle,
        link: node.socialLink,
        image: node.socialLinkImage.url
      }
    }),
    about: {
      content: aboutData.aboutContent,
      profilePhoto: aboutData.aboutProfilePhoto.url,
      resumeLink: aboutData.resumeLink
    },
    workedWith: data.allAttribute.nodes.filter(node => {
      return node.attributeFor === "workedWith"
    })
    .map(attribute => {
      return {
        title: attribute.attributeTitle,
        image: attribute.attributeImage.url
      }
    }),
    skills: data.allAttribute.nodes.filter(node => {
      return node.attributeFor === "Skills"
    })
    .sort((a , b) => parseInt(a.attributeOrder) < parseInt(b.attributeOrder) ? -1 : 1)
    .map(attribute => {
      return {
        title: attribute.attributeTitle,
        image: attribute.attributeImage.url
      }
    })
    
  }
  
  return {
    props,
  };
}
export default Home;
