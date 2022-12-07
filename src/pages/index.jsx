import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import { graphql } from "gatsby";
import React, { useEffect } from "react";

import { Seo } from "../components/commons/seo/Seo";
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

export default function Page({ data }) {
  production ? console.log("Production mode") : console.log("Development mode");

  const instance = createInstance({
    siteId: data.site.siteMetadata.matomo.siteId,
    urlBase: data.site.siteMetadata.matomo.urlBase,
    disabled: !production,
    heartBeat: {
      active: true,
      seconds: 10
    }
  });

  useEffect(() => {
    instance.trackPageView();
  }, [instance]);

  return (
    <MatomoProvider value={instance}>
      <Seo data={data} />
      <MainPage data={data} />
    </MatomoProvider>
  );
}
