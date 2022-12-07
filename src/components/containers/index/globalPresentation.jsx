import React from "react";
import { Personal } from "../../sections/personal";

export function GlobalPresentation() {
  return (
    <Personal
      title="Présentation"
      text={
        <p className="leading-relaxed">
          <span>
            {" "}
            Étudiant en dernière année de Licence Informatique à{" "}
            <a
              href="https://www.univ-amu.fr/"
              target="_blank"
              rel="noreferrer"
              className="text-primaryLight dark:text-primaryDark">
              Aix-Marseille
            </a>
            , je suis actuellement à la recherche d'un stage de fin d'étude en
            génie logiciel.
          </span>
          <br />
          <br />
          <span>
            Si vous souhaitez en savoir plus sur mon parcours, n'hésitez pas à
            consulter mon{" "}
            <a
              href="https://www.linkedin.com/in/xrths/"
              target="_blank"
              rel="noreferrer"
              className="text-primaryLight dark:text-primaryDark">
              LinkedIn
            </a>{" "}
            ou à me contacter par{" "}
            <a
              href="mailto:contact@xrths.fr"
              className="text-primaryLight dark:text-primaryDark">
              mail
            </a>
            .
          </span>
        </p>
      }
    />
  );
}
