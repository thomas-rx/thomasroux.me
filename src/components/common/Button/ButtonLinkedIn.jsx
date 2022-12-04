import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function ButtonLinkedIn(props) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className='mx-1'>
      <button className='px-4 py-2 mt-5 text-sm font-semibold bg-transparent border  rounded-sm font-extralight text-secondaryLight transition ease-in-out border-primaryLight hover:bg-primaryLight hover:text-white hover:-translate-y-1 dark:text-secondaryDark'>
        Voir sur LinkedIn
        <FontAwesomeIcon icon={faLinkedin} className='ml-1' />
      </button>
    </a>
  );
}
