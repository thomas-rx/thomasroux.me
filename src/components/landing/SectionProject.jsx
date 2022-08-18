import React from 'react';

import { GameBtn } from '../common/Button/GameBtn';
import { GithubBtn } from '../common/Button/GithubBtn';
import { LinkedinBtn } from '../common/Button/LinkedinBtn';
import { Slider } from '../common/Slider/Splider';
import { GradienText } from '../common/Text/GradientText';

export function SectionProject(props) {
  return (
    <div className='h-screen section'>
      <div className='px-12 lg:px-20 md:flex'>
        <div className='w-full'>
          <div className='md:flex'>
            <div className='w-full grid md:content-center md:w-2/4 md:mr-5 md:p-10'>
              <div className='md:mr-0'>
                <div>
                  <h3 className='text-3xl font-black'>
                    <GradienText text={props.name} />
                  </h3>
                  <h5 className='pb-3 text-xl font-thin text-emerald-800 dark:text-white md:pb-10'>
                    {props.year}
                  </h5>
                </div>
                <div className='text-sm text-justify md:text-base'>
                  {props.description !== undefined &&
                    props.description.map((value) => (
                      <div>
                        <p>{value}</p>
                        <br />
                      </div>
                    ))}

                  { // Si props.description est undefined, on affiche ce texte
                    props.description === undefined && (
                      <p className='leading-relaxed'>
                        <span>
                          Étudiant en troisième année de licence informatique à l'Université d'Aix-Marseille. J'étudie le développement et la gestion de systèmes d'informations.
                        </span>
                        <br />
                        <br />
                        <span>N'hésitez pas à me</span>
                        <a href='#contact' className='mx-1.5'>
                          <strong className='p-1 rounded font-extralight bg-gradient-to-br from-lime-400 to-cyan-400 dark:text-gray-800'>
                            contacter
                          </strong>
                        </a>
                        <span>
                          si vous avez besoin d'aide ou si vous souhaitez me faire
                          part de votre projet.
                        </span>
                      </p>
                    )}
                </div>

                {props.technologies !== undefined && (
                  <div className='text-4xl'>
                    <div className='inline-flex'>
                      {props.technologies.map((tech) => (
                        <em
                          className={`stroke-emerald-900 ${tech.toLowerCase()} colored mr-2 transition ease-in-out hover:scale-110 hover:-translate-y-1.5 duration-100`}></em>
                      ))}
                    </div>
                  </div>
                )}

                {props.githubLink !== undefined && (
                  <GithubBtn link={props.githubLink} />
                )}
                {props.gameLink !== undefined && (
                  <GameBtn link={props.gameLink} />
                )}
                {props.linkedinLink !== undefined && (
                  <LinkedinBtn link={props.linkedinLink} />
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
