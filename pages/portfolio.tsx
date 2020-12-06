import React from "react";
import Layout from "../components/Layout";
import { client } from "../src/pokko";
import { IHero } from "../types/hero.types";
import { ILogo, ISocialLink } from "../types/navAndFooter.types";
import Portfolio from '../components/portfolioPage/Portfolio';

const query = require("../src/api/portfolio.graphql");

interface IProps {
  logo: ILogo;
  hero: IHero;
  socialLinks: ISocialLink[];
  heading: string;
  categories: string[];
}

const PortfolioPage = ({logo, hero, socialLinks, heading, categories }:IProps) => {
  return (
    <Layout 
      logo={logo}
      hero={hero}
      socialLinks={socialLinks}
    >
      <Portfolio heading={heading} categories={categories} />
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
  
  const portfolioData = data.allPortfolio.nodes[0];

  const props:IProps = {
    logo: data.logo,
    hero: {
      title: data.hero.heroTitle,
      subtitle: data.hero.heroSubtitle,
      media: {
        type: "image",
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
    heading: portfolioData.heading,   
    categories: portfolioData.categories
  }
  
  return {
    props,
  };
}

export default PortfolioPage;