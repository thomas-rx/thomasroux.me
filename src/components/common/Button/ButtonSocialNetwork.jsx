import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function ButtonSocialNetwork(props) {
  return (
    <a
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      className='justify-center rounded-full grid w-28 h-28 place-content-center hover:bg-green-500 hover:text-white group transition ease-in-out'>
      <FontAwesomeIcon
        icon={props.icon}
        className='text-7xl text-lime-600 group-hover:text-white'
      />
    </a>
  );
}
