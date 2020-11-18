import React from "react";
import Head from 'next/head'
import Layout from "../components/Layout";
import { client } from "../src/pokko";
import { ILogo, ISocialLink } from "../types/navAndFooter.types";
import { IHero } from "../types/hero.types";

const query = require("../src/api/home.graphql");

interface IProps {
  logo: ILogo;
  hero: IHero;
  socialLinks: ISocialLink[];
}
const Home = ({logo, hero, socialLinks}:IProps) => {
  return (
    <Layout 
      logo={logo}
      hero={hero}
      socialLinks={socialLinks}
    >
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
    })
  }
  
  return {
    props,
  };
}
export default Home;
