import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "./button";

export function Linkedin(props) {
  return (
    <Button
      link={props.link}
      desktopText="LinkedIn"
      mobileText="LinkedIn"
      icon={faLinkedin}
    />
  );
}
