import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {Button} from "./button";

export function Play(props) {
  return (
    <Button link={props.link} desktopText="Découvrir le projet" mobileText="Découvrir" icon={faRocket} />
    );
}