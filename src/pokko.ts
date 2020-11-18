import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const config = {
  environment: process.env.POKKO_ENVIRONMENT!,
  project: process.env.POKKO_PROJECT!,
  token: process.env.POKKO_TOKEN!,
};

const options: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache(),

  headers: {
    "X-Token": config.token,
  },

  uri: `https://au-syd1.pokko.io/${config.project}/${config.environment}/graphql`,
};

export const client = new ApolloClient(options);
