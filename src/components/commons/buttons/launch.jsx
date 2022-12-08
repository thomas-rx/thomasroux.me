import { faRocket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./Button";

export function Launch(props) {
  return (
    <Button link={props.link} desktopText="Découvrir le projet" mobileText="Découvrir" icon={faRocket} />
  );
}