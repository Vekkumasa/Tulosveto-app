import 'dotenv/config';

export default {
  name: "tulosveto-app",
  slug: "tulosveto-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "",
  splash: {
    image: "",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [ "**/*" ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "",
      backgroundColor: "#FFFFFF"
    }
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  extra: {
    x_rapidapi_key: process.env.API_KEY,
    apollo_uri: process.env.APOLLO_URI
  }
};