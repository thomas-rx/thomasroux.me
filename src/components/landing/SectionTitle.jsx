import { useMatomo } from '@datapunt/matomo-tracker-react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { GradienText } from '../common/Text/GradientText';

export function SectionTitle(props) {
  const { trackEvent } = useMatomo();
  return (
    <div className='grid content-center h-screen font-sans section'>
      <span className='justify-center font-black text-center'>
        <h1 className='text-5xl md:text-7xl'>
          <span>
            <GradienText text={props.title} />
          </span>
        </h1>

        {props.description !== undefined && (
          <h2 className='m-[10%] md:m-[2%] text-xl'>
            <GradienText text={props.description} />
          </h2>
        )}

        {props.btnText !== undefined && (
          <div className='flex items-center justify-center w-screen animate-bounce'>
            <button
              onClick={(e) => {
                props.fullpageApi.moveSectionDown();
                trackEvent({
                  category: 'Click',
                  action: e.target.innerText,
                });
              }}
              className='flex justify-center px-5 py-2 mx-2 mt-10 text-xl font-black text-green-800 transition ease-in-out border-2 rounded-full border-lime-500 hover:bg-lime-500 hover:text-white hover:-translate-y-1 dark:text-lime-200'>
              <div>
                <span>{props.btnText}</span>
              </div>
              <a href='#project' className='ml-2'>
                <FontAwesomeIcon icon={faAngleDown} className='w-[10px]' />
              </a>
            </button>
          </div>
        )}
      </span>
    </div>
  );
}
