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

  
  const homePageData = data.allHome.nodes[0];

  const props:IProps = {
    logo: data.logo,
    hero: {
      title: homePageData.hero.heroTitle,
      subtitle: homePageData.hero.heroSubtitle,
      media: {
        type: "video",
        url: homePageData.hero.heroMedia.url
      },
      mobileMedia: {
        type: "image",
        url: homePageData.hero.mobileHero.url
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
      content: homePageData.about.aboutContent,
      profilePhoto: homePageData.about.aboutProfilePhoto.url,
      resumeLink: homePageData.about.resumeLink
    },
    workedWith: homePageData.clients.map(client => {
      return {
      title: client.attributeTitle,
      image: client.attributeImage.url
    }
  }),
    skills: homePageData.skills.map(skill => {
      return {
      title: skill.attributeTitle,
      image: skill.attributeImage.url
    }
  }),
  }
  
  return {
    props,
  };
}
export default Home;
