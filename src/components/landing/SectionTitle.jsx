import { useMatomo } from '@datapunt/matomo-tracker-react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { GradienText } from '../common/Text/GradientText';

export function SectionTitle(props) {
  const { trackEvent } = useMatomo();
  return (
    <div className='h-screen section'>
      <div className='grid content-center'>
        <span className='justify-center text-center'>
          <h1 className='text-5xl font-black md:text-7xl'>
            <span>
              <GradienText text={props.title} />
            </span>
          </h1>

          {props.description === undefined && (
            <h2 className='mt-10 text-lg font-light md:text-1xl mx-[10%]'>
              <div className='inline'>
                <span>
                  <GradienText text='Freelance dans le domaine du développement web, je souhaite mettre à profit mes compétences dans des projets inutiles et innovants.' />
                </span>

                <p>
                  <span className='text-transparent bg-clip-text bg-gradient-to-br from-lime-600 to-cyan-500'>
                    N'hésitez pas à me
                  </span>
                  <a href='#contact' className='mx-1'>
                    <strong className='p-1 rounded bg-gradient-to-br from-lime-400 to-cyan-400 dark:text-gray-800 font-black'>
                      contacter
                    </strong>
                  </a>
                  <span className='text-transparent bg-clip-text bg-gradient-to-br from-lime-600 to-cyan-500'>
                    si vous avez besoin d'aide ou si vous souhaitez me faire
                    part de votre projet.
                  </span>
                </p>
              </div>
            </h2>
          )}

          {props.description !== undefined && (
            <span>
              <GradienText text={props.description} />
            </span>
          )}

          {props.btnText !== undefined && (
            <div className='flex items-center justify-center w-screen'>
              <button
                onClick={(e) => {
                  props.fullpageApi.moveSectionDown();
                  trackEvent({
                    category: 'Click',
                    action: e.target.innerText,
                  });
                }}
                className='flex justify-center px-5 py-2 mx-2 mt-20 text-xl font-black text-green-800 transition ease-in-out border-2 rounded-full border-lime-500 hover:bg-lime-500 hover:text-white hover:-translate-y-1 dark:text-lime-200'>
                <div>
                  <span>{props.btnText}</span>
                </div>
                <a href='#project' className='ml-2'>
                  <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
