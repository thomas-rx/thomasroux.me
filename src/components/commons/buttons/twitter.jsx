import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "./button";

export function Twitter(props) {
  return (
    <Button
      link={props.link}
      desktopText="Elon's Twitter"
      mobileText="Elon's Twitter"
      icon={faXTwitter}
    />
  );
}
