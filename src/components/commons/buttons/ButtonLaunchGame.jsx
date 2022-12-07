import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function ButtonLaunchGame(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="mx-1">
      <button
        className="px-4 py-2 mt-5 text-sm font-semibold bg-transparent border  rounded-sm font-extralight text-secondaryLight transition ease-in-out border-primaryLight hover:bg-primaryLight hover:text-white hover:-translate-y-1 dark:text-secondaryDark">
        Jouer <FontAwesomeIcon icon={faRocket} className="ml-1" />
      </button>
    </a>
  );
}
