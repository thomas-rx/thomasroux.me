import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

export function GameBtn(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="mx-1">
            <button className="px-4 py-2 mt-5 text-sm font-semibold transition ease-in-out bg-transparent border rounded md:text-base hover:bg-lime-500 text-lime-700 dark:text-lime-300 hover:text-white border-lime-500 hover:border-transparent">
                Jouer <FontAwesomeIcon icon={faRocket} className="ml-1" />
            </button>
        </a>
    )
}
