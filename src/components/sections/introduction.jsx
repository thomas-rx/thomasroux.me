import { useMatomo } from "@datapunt/matomo-tracker-react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

export function Introduction(props) {
  const { trackEvent } = useMatomo();

  return (
    <div className="content-center h-screen grid section">
      <span className="justify-center font-bold text-center">
        <h1
          className="text-5xl md:text-7xl bg-gradient-to-r from-indigo-300 via-teal-600 to-cyan-900 bg-clip-text text-transparent font-ubuntu">
          <ReactTypingEffect
            text={props.title}
            speed={100}
            eraseSpeed={100}
            eraseDelay={1000}
            typingDelay={1000}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}></ReactTypingEffect>
        </h1>

        <h2 className="m-[10%] md:m-[2%] text-2xl font-thin text-secondaryLight dark:text-secondaryDark">
          {props.subtitle}
        </h2>

        <div className="flex items-center justify-center w-screen animate-bounce">
          <button
            onClick={(e) => {
              props.fullpage.moveSectionDown();
              trackEvent({ category: "Click", action: e.target.innerText });
            }}
            className="flex justify-center px-5 py-2 mx-2 mt-20 text-xl border-2 rounded-sm font-extralight text-secondaryLight transition ease-in-out border-primaryLight hover:bg-primaryLight hover:text-white hover:-translate-y-1 dark:text-secondaryDark">
            <span>{props.button}</span>

            <a href="#project" className="ml-2">
              <FontAwesomeIcon icon={faAngleDown} className="w-[10px]" />
            </a>
          </button>
        </div>
      </span>
    </div>
  );
}
