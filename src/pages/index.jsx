import { createInstance, MatomoProvider, useMatomo } from "@datapunt/matomo-tracker-react";
import { graphql } from "gatsby";
import React, { useEffect } from "react";
import Snowfall from "react-snowfall";
import packageJson from "/package.json";

import { Head } from "../components/commons/seo/seo";
import ReactFullpage from "@fullpage/react-fullpage";
import { MyIntroduction } from "../components/containers/index/myIntroduction";
import { Projects } from "../components/containers/index/projects";

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
console.log(`Environment: ${production ? "Production" : "Development"}`);
console.log(`Commit hash: ${process.env.COMMIT_REF}`);
console.log(`Version: ${packageJson.version}`);
console.log(`Build date: ${process.env.BUILD_DATE}`);

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

  const handleScroll = (origin, destination, direction) => {
    console.log(`Scroll ${direction}: ${origin.anchor} -> ${destination.anchor}`);
    if (destination.anchor !== origin.anchor) {
      const eventCategory = `Scroll ${direction}`;
      const eventAction = `${origin.anchor} -> ${destination.anchor}`;
      trackEvent({ category: eventCategory, action: eventAction });
    }
  };

  const currentMonth = new Date().getMonth();
  const isWinter = currentMonth === 11 || currentMonth === 12 || currentMonth === 1;

  const seasonalEffect = () => {
    if (isWinter) return <Snowfall snowflakeCount={60} />;
  };

  useEffect(() => {
    instance.trackPageView();
  }, [instance]);
  const { trackEvent } = useMatomo();

  return (
    <MatomoProvider value={instance}>
      <Head data={data} />
      {seasonalEffect()}
      <ReactFullpage
        anchors={["hello", "about", "covidfrance", "medicgestion", "wordly", "correcteur"]}
        afterLoad={handleScroll}
        render={({ _state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <introduction
                title={["Bonjour", "Hello", "Hola", "Ciao", "Hallo", "Olá"]}
                subtitle="Bienvenue sur mon portfolio !"
                button="Découvrir"
                fullpage={fullpageApi}
              />
              <MyIntroduction />
              <Projects data={data} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </MatomoProvider>
  );
}