import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function LinkedinBtn(props) {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className='mx-1'>
      <button className='px-4 py-2 mt-5 text-sm font-semibold bg-transparent border rounded-sm transition ease-in-out md:text-base hover:bg-lime-500 text-lime-700 dark:text-lime-300 hover:text-white border-lime-500 hover:border-transparent'>
        Voir sur LinkedIn
        <FontAwesomeIcon icon={faLinkedin} className='ml-1' />
      </button>
    </a>
  );
}
