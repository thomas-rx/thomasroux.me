import { useMatomo } from "@datapunt/matomo-tracker-react";
import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

import { SectionPresentation } from "../../sections/section-presentation";
import { GlobalPresentation } from "./globalPresentation";
import { ProjectsPresentation } from "./projects";

export default function PageContent({ data }) {
  const { trackEvent } = useMatomo();

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <ReactFullpage
        navigation={true}
        navigationPosition="right"
        keyboardScrolling={true}
        animateAnchor={true}
        scrollBar={false}
        responsiveWidth={320}
        credits={false}
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        anchors={[
          "hello",
          "about",
          "covidfrance",
          "medicgestion",
          "wordly",
          "correcteur",
        ]}
        afterLoad={(origin, destination, direction) => {
          if (destination.anchor !== origin.anchor) {
            trackEvent({
              category: "Scroll " + direction,
              action: origin.anchor + " -> " + destination.anchor
            });
          }
        }}
        render={({ _state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <SectionPresentation
                title={["Bonjour", "Hello", "Hola", "Ciao", "Hallo"]}
                subtitle="Bienvenue sur mon portfolio !"
                button="Découvrir"
                fullpage={fullpageApi}
              />

              <GlobalPresentation />
              <ProjectsPresentation data={data} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
