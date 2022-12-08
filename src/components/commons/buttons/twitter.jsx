import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "./Button";

export function Twitter(props) {
  return (
    <Button link={props.link} desktopText="Voir sur Twitter" mobileText="Twitter" icon={faTwitter} />
  );
}