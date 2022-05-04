import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { SocialNetworkBtn } from '../common/Button/SocialNetworkBtn';

export function SectionContact(props) {
  return (
    <div className='h-screen section'>
      <div className='grid content-center'>
        <span className='justify-center text-center'>
          <h1 className='text-2xl font-black text-transparent md:text-5xl bg-clip-text bg-gradient-to-br from-lime-400 to-cyan-500'>
            <span>Contactez-moi</span>
          </h1>
        </span>
      </div>

      <div className='grid content-center w-2/3 m-auto place-content-center mt-[5%]'>
        <div className='md:flex'>
          <div className='item mx-5'>
            <SocialNetworkBtn
              name='LinkedIn'
              href={props.linkedinLink}
              icon={faLinkedin}
            />
          </div>
          <div className='item mx-5'>
            <SocialNetworkBtn
              name='E-Mail'
              href={`mailto:${props.mail}`}
              icon={faEnvelope}
            />
          </div>
          <div className='item mx-5'>
            <SocialNetworkBtn
              name='GitHub'
              href={props.githubLink}
              icon={faGithub}
            />
          </div>
          <div className='item mx-5'>
            <SocialNetworkBtn
              name='Malt'
              href={props.maltLink}
              icon={faBriefcase}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
