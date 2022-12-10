import React from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Github} from "../commons/buttons/github";
import {Twitter} from "../commons/buttons/twitter";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {Launch} from "../commons/buttons/launch";
import {AsciinemaPlayer} from "../commons/players/asciinema-player";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export function Project(props) {
    if (props.title === undefined) {
        throw new Error("props.title is null");
    }

    if (props.date === undefined) {
        throw new Error("props.date is null");
    }

    if (props.description === undefined) {
        throw new Error("props.description is null");
    }

    if (props.images === undefined && props.ascii === undefined) {
        throw new Error(
            "props.pictures and props.ascii is null, at least one is required"
        );
    }

    return (
        <div className="h-screen w-full section">
            <div className="m-[10%] md:flex">
                <div className="w-full">
                    <div className="md:flex">
                        <div
                            className="grid content-center md:w-2/4 m-2 border-l-2 md:border-l-0 border-primaryLight dark:border-primaryDark pl-4">
                            <h3 className="text-3xl font-black font-ubuntu text-primaryLight dark:text-primaryDark">
                                {props.title}
                            </h3>

                            <h4 className="text-xl font-thin text-secondaryLight dark:text-secondaryDark">
                                {props.date}
                            </h4>

                            <div className="text-sm text-justify md:text-base pt-[5%]">
                                {props.description}
                            </div>

                            <div className="text-3xl inline-flex">
                                {props.technologies.map((technology, index) => (
                                    <em
                                        key={index}
                                        className={`${technology} colored my-5 mr-1`}></em>
                                ))}
                            </div>

                            <div className="flex md:text-sm text-xs">
                                {props.twitter !== undefined && (
                                    <Twitter link={props.twitter}/>
                                )}

                                {props.github !== undefined && <Github link={props.github}/>}

                                {props.play !== undefined && <Launch play={props.play}/>}
                            </div>
                        </div>

                        <div className="md:w-2/4 m-2">
                            <div className="m-auto md:w-5/6 pt-5 md:pt-0">
                                {props.ascii === undefined && (
                                    <Splide
                                        options={{
                                            type: "loop",
                                            pagination: false,
                                            autoplay: true,
                                            easing: "ease-in-out",
                                            interval: 5000,
                                            pauseOnHover: false,
                                            pauseOnFocus: false,
                                            resetProgress: false,
                                            arrows: false,
                                            lazyLoad: "nearby",
                                            speed: 1000,
                                            gap: "1rem",
                                            perPage: 1,
                                            perMove: 1,
                                            breakpoints: {
                                                640: {perPage: 1, perMove: 1, gap: "1rem"},
                                                768: {perPage: 1, perMove: 1, gap: "1rem"},
                                                1024: {perPage: 1, perMove: 1, gap: "1rem"}
                                            }
                                        }}>
                                        {props.images.map((image, index) => (
                                            <SplideSlide key={index}>
                                                <Zoom>
                                                    <GatsbyImage
                                                        image={getImage(image)}
                                                        alt={props.title}
                                                        title={props.title + " project"}
                                                        imgClassName={`md:w-full m-auto rounded rounded-xl`}
                                                    />
                                                </Zoom>
                                            </SplideSlide>
                                        ))}
                                    </Splide>
                                )}

                                {props.ascii !== undefined &&
                                    <AsciinemaPlayer data-autoplay src={props.ascii}
                                                     autoplay={props.autoplay || false}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
