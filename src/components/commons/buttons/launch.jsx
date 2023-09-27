import { faRocket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./button";

export function Launch(props) {
  return (
    <Button
      link={props.link}
      desktopText="Discover"
      mobileText="Discover"
      icon={faRocket}
    />
  );
}
