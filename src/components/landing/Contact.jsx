import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { ButtonSocialNetwork } from '../common/Button/ButtonSocialNetwork';

export function Contact(props) {
  return (
    <div className='content-center h-screen grid section'>
      <div>
        <span className='justify-center text-center'>
          <h1 className='text-2xl font-black text-transparent md:text-5xl bg-clip-text bg-gradient-to-br  from-green-500 via-green-600 to-blue-500'>
            <span>Contactez-moi</span>
          </h1>
        </span>

        <div className='grid content-center w-2/3 m-auto place-content-center mt-[5%]'>
          <div className='md:flex'>
            <div className='mx-5 item'>
              <ButtonSocialNetwork
                name='LinkedIn'
                href={props.linkedinLink}
                icon={faLinkedin}
              />
            </div>
            <div className='mx-5 item'>
              <ButtonSocialNetwork
                name='E-Mail'
                href={`mailto:${props.mail}`}
                icon={faEnvelope}
              />
            </div>
            <div className='mx-5 item'>
              <ButtonSocialNetwork
                name='GitHub'
                href={props.githubLink}
                icon={faGithub}
              />
            </div>
            <div className='mx-5 item'>
              <ButtonSocialNetwork
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
