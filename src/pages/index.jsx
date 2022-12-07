import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import { graphql } from "gatsby";
import React, { useEffect } from "react";
import Snowfall from "react-snowfall";
import packageJson from "/package.json";

import { Seo } from "../components/commons/seo/seo";
import MainPage from "../components/containers/index";

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        username
        email
        canonicalUrl
        siteUrl
        wordlyUrl
        linkedinUrl
        githubUrl
        twitterUrl
        maltUrl

        matomo {
          siteId
          urlBase
        }
      }
    }
  }
`;

const production = process.env.NODE_ENV === "production";
production ? console.log("Environment: Production") : console.log("Environment: Development");
console.log("Commit hash: " + process.env.COMMIT_REF);
console.log("Version: " + packageJson.version);
console.log("Build date: " + process.env.BUILD_DATE);

export default function Page({ data }) {
  const instance = createInstance({
    siteId: data.site.siteMetadata.matomo.siteId,
    urlBase: data.site.siteMetadata.matomo.urlBase,
    disabled: !production,
    heartBeat: {
      active: true,
      seconds: 10
    }
  });

  // Seasonal effects
  const season = new Date().getMonth();
  const isWinter = season === 11 || season === 12 || season === 1;
  const isSpring = season === 2 || season === 3 || season === 4;
  const isSummer = season === 5 || season === 6 || season === 7;
  const isAutumn = season === 8 || season === 9 || season === 10;

  const seasonalEffect = () => {
    let theme;
    if (isWinter) {
      theme = <Snowfall snowflakeCount={60} />;
    } else if (isSpring) {
      return null;
    } else if (isSummer) {
      return null;
    } else if (isAutumn) {
      return null;
    }
    return theme;
  };

  useEffect(() => {
    instance.trackPageView();
  }, [instance]);

  return (
    <MatomoProvider value={instance}>
      <Seo data={data} />
      {seasonalEffect()}
      <MainPage data={data} />
    </MatomoProvider>
  );
}
