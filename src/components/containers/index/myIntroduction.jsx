import React from "react";
import { Personal } from "../../sections/personal";

export function MyIntroduction() {
  return (
    <Personal
      title="Introduction"
      text={
        <p className="leading-relaxed">
          <span>
            {" "}
            Currently an apprentice software engineer at{" "}
            <a
              href="https://www.capgemini.com/"
              target="_blank"
              rel="noreferrer"
              className="text-primaryLight dark:text-primaryDark"
            >
              Capgemini
            </a>
            , I am pursuing my Master's in Software Science at the{" "}
            <a
              href="https://www.univ-tlse3.fr/"
              target="_blank"
              rel="noreferrer"
              className="text-primaryLight dark:text-primaryDark"
            >
              Faculty of Sciences of Toulouse
            </a>
            .
          </span>
          <br />
          <br />
          <span>
            If you'd like to know more about my background, please check out my{" "}
            <a
              href="https://www.linkedin.com/in/thmsrx/"
              target="_blank"
              rel="noreferrer"
              className="text-primaryLight dark:text-primaryDark"
            >
              LinkedIn
            </a>{" "}
            or contact me via{" "}
            <a
              href="mailto:contact@thomasroux.me"
              className="text-primaryLight dark:text-primaryDark"
            >
              email
            </a>
            .
          </span>
        </p>
      }
    />
  );
}
