import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  const { link, desktopText, mobileText, icon } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="mx-1">
      <button className="px-3 py-2 md:mt-5 font-semibold border rounded-sm font-extralight text-secondaryLight transition ease-in-out border-primaryLight hover:bg-primaryLight hover:text-white hover:-translate-y-1 dark:text-secondaryDark">
        <span className="hidden md:inline">{desktopText} </span>
        <span className="md:hidden">{mobileText} </span>
        <FontAwesomeIcon icon={icon} className="" />
      </button>
    </a>
  );
};

export default Button;
