import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "./button";

export function Twitter(props) {
    return (
        <Button link={props.link} desktopText="Voir sur Twitter" mobileText="Twitter" icon={faTwitter}/>
    );
}