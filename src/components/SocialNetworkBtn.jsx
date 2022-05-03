import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SocialNetworkBtn(props) {
    return (
        <a
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid justify-center w-28 h-28 place-content-center rounded-full hover:bg-green-500 hover:text-white group transition ease-in-out"
        >
            <FontAwesomeIcon
                icon={props.icon}
                className="text-7xl text-lime-600 group-hover:text-white"
            />
        </a>
    )
}
