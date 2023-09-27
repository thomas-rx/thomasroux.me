import React from "react";
import Illustration from "/assets/presentation.svg";

export function Personal(props) {
  if (props.title === null) {
    throw new Error("props.title is null");
  }

  if (props.text === null) {
    throw new Error("props.text is null");
  }

  return (
    <div className="h-screen w-full section">
      <div className="m-[10%] md:flex">
        <div className="w-full">
          <div className="md:flex">
            <div className="grid content-center md:w-2/4 m-2 border-l-2 md:border-l-0 border-primaryLight dark:border-primaryDark pl-4">
              <h3 className="text-3xl font-black font-ubuntu text-primaryLight dark:text-primaryDark">
                {props.title}
              </h3>

              <div className="text-sm text-justify md:text-base pt-2">
                {props.text}
              </div>
            </div>

            <div className="md:w-2/4 m-2 pt-[10%] md:pt-0">
              <div className="m-auto md:w-2/3 w-3/5 flex place-content-center">
                <Illustration />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
