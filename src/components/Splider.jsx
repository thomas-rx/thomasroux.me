import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export function Slider(props) {
    return (
        <div className="grid w-full">
            <Splide
                options={{ type: 'loop', pagination: false, autoplay: true }}
                className="md:mx-[15%]"
            >
                {props.pictures.map((value, index) => (
                    <SplideSlide key={index}>
                        <img
                            src={value[0]}
                            alt={value[1]}
                            title={value[2]}
                            className="m-auto rounded-lg"
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}
