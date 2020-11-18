import React from "react";
import Head from 'next/head'
import Layout from "../components/Layout";
import { client } from "../src/pokko";
import { ISocialLinks } from "../types/footer.types";

const query = require("../src/api/footer.graphql");

interface IProps {
  socialLinks: ISocialLinks[]
}
const Home = ({socialLinks}:IProps) => {
  return (
    <Layout socialLinks={socialLinks}>
      <div>hello</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await client.query({
    query,
  });
  
  const data = res?.data?.entries?.allSocialLinks?.nodes ?? null;
  if (!data) {
    if (res?.errors) {
      console.warn("**** errors", JSON.stringify(res.errors));
      return { props: {} };
    }

    console.log("**** no data", JSON.stringify(res));
    return { props: {} };
  }

  const props:IProps = {
    socialLinks: data.map(node => {
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
