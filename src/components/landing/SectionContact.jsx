import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { SocialNetworkBtn } from '../common/Button/SocialNetworkBtn';

export function SectionContact(props) {
  return (
    <div className='grid content-center h-screen section'>
      <div>
        <span className='justify-center text-center'>
          <h1 className='text-2xl font-black text-transparent md:text-5xl bg-clip-text bg-gradient-to-br from-lime-400 to-cyan-500'>
            <span>Contactez-moi</span>
          </h1>
        </span>

        <div className='grid content-center w-2/3 m-auto place-content-center mt-[5%]'>
          <div className='md:flex'>
            <div className='mx-5 item'>
              <SocialNetworkBtn
                name='LinkedIn'
                href={props.linkedinLink}
                icon={faLinkedin}
              />
            </div>
            <div className='mx-5 item'>
              <SocialNetworkBtn
                name='E-Mail'
                href={`mailto:${props.mail}`}
                icon={faEnvelope}
              />
            </div>
            <div className='mx-5 item'>
              <SocialNetworkBtn
                name='GitHub'
                href={props.githubLink}
                icon={faGithub}
              />
            </div>
            <div className='mx-5 item'>
              <SocialNetworkBtn
                name='Malt'
                href={props.maltLink}
                icon={faBriefcase}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
