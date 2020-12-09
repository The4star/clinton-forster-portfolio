import React, { useState } from "react";
import Layout from "../components/Layout";
import { client } from "../src/pokko";
import { IHero } from "../types/hero.types";
import { ILogo, ISocialLink } from "../types/navAndFooter.types";
import PortfolioContainer from '../components/portfolioPage/PortfolioContainer';
import { IPortfolioCategory, IPortfolioPiece } from "../types/portfolio.types";

const query = require("../src/api/portfolio.graphql");

interface IProps {
  logo: ILogo;
  hero: IHero;
  socialLinks: ISocialLink[];
  heading: string;
  categories: IPortfolioCategory[];
}

const PortfolioPage = ({logo, hero, socialLinks, heading, categories }:IProps) => {
  const [ portfolioPieces, setPortfolioPieces ] = useState<IPortfolioPiece[] | []>([]); 

  return (
    <Layout 
      logo={logo}
      hero={hero}
      socialLinks={socialLinks}
    >
      <PortfolioContainer 
        heading={heading} 
        categories={categories} 
        portfolioPieces={portfolioPieces} 
        setPortfolioPieces={setPortfolioPieces}
      />
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
    categories: portfolioData.portfolioCategories
  }
  
  return {
    props,
  };
}

export default PortfolioPage;