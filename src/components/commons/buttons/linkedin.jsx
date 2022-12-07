import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Linkedin(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="mx-1">
      <button
        className="px-3 py-2 md:mt-5 font-semibold border rounded-sm font-extralight text-secondaryLight transition ease-in-out border-primaryLight hover:bg-primaryLight hover:text-white hover:-translate-y-1 dark:text-secondaryDark">
        <span className="hidden md:inline">Voir sur LinkedIn </span>
        <span className="md:hidden">LinkedIn </span>
        <FontAwesomeIcon icon={faLinkedin} className="ml-1" />
      </button>
    </a>
  );
}
