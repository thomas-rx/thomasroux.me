import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "./Button";

export function Github(props) {
  return (
    <Button link={props.link} desktopText="Voir sur GitHub" mobileText="GitHub" icon={faGithub} />
  );
}
