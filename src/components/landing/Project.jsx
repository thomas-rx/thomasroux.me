import React from 'react';

import { ButtonGitHub } from '../common/Button/ButtonGitHub';
import { ButtonLaunchGame } from '../common/Button/ButtonLaunchGame';
import { ButtonLinkedIn } from '../common/Button/ButtonLinkedIn';
import { Slider } from '../common/Slider/Slider';

export function Project(props) {
  return (
    <div className='h-screen section'>
      <div className='px-12 lg:px-20 md:flex'>
        <div className='w-full'>
          <div className='md:flex'>
            <div className='w-full grid md:content-center md:w-2/4 md:mr-5 md:p-10'>
              <div className='md:mr-0'>
                <h3 className='text-3xl font-black text-primaryLight dark:text-primaryDark'>
                  {props.name}
                </h3>
                <h5 className='pb-3 text-xl font-thin text-secondaryLight dark:text-secondaryDark md:pb-10'>
                  {props.year}
                </h5>

                <div className='text-sm text-justify md:text-base'>
                  {props.presentation === true ? (
                    <p className='leading-relaxed text-neutral'>
                      <span>
                        Étudiant en dernière année de Licence Informatique à{' '}
                        <a
                          href='https://www.univ-amu.fr/'
                          target='_blank'
                          rel='noreferrer'
                          className='text-primaryLight dark:text-primaryDark'>
                          Aix-Marseille
                        </a>
                        , je suis actuellement à la recherche d'un stage de fin
                        d'étude en génie logiciel.
                      </span>
                      <br />
                      <br />
                      <span>
                        Si vous souhaitez en savoir plus sur mon parcours,
                        n'hésitez pas à consulter mon{' '}
                        <a
                          href='https://www.linkedin.com/in/xrths/'
                          target='_blank'
                          rel='noreferrer'
                          className='text-primaryLight dark:text-primaryDark'>
                          LinkedIn
                        </a>{' '}
                        ou à me contacter par{' '}
                        <a
                          href='mailto:contact@xrths.fr'
                          className='text-primaryLight dark:text-primaryDark'>
                          mail
                        </a>
                        .
                      </span>
                    </p>
                  ) : (
                    <p className='leading-relaxed'>{props.description}</p>
                  )}
                </div>

                {props.technologies !== undefined && (
                  <div className='text-4xl'>
                    <div className='inline-flex'>
                      {props.technologies.map((technology, index) => (
                        <em
                          key={index}
                          className={`${technology} colored my-5 mr-1 transition ease-in-out hover:scale-110 hover:-translate-y-1.5 duration-100`}></em>
                      ))}
                    </div>
                  </div>
                )}

                {props.githubLink !== undefined && (
                  <ButtonGitHub link={props.githubLink} />
                )}
                {props.gameLink !== undefined && (
                  <ButtonLaunchGame link={props.gameLink} />
                )}
                {props.linkedinLink !== undefined && (
                  <ButtonLinkedIn link={props.linkedinLink} />
                )}
              </div>
            </div>

            {props.pictures.length === 1 && (
              <div className='grid w-full pt-[20%] md:w-3/5 md:pt-0 place-items-center'>
                <img
                  src={props.pictures[0][0]}
                  alt={props.pictures[0][1]}
                  title={props.pictures[0][2]}
                  className={`m-auto rounded-lg md:w-4/5 ${props.pictures[0][3]}`}
                />
              </div>
            )}

            {props.pictures.length > 1 && (
              <div className='grid w-full pt-[20%] md:w-3/5 md:pt-0 place-items-center'>
                <Slider pictures={props.pictures} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
