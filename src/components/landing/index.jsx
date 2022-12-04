import { useMatomo } from '@datapunt/matomo-tracker-react';
import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import CorrecteurImage from '../../images/projects/correcteur.png';
import CovidFranceImage from '../../images/projects/covidfrance1.png';
import DiskarrImage from '../../images/projects/diskarr.png';
import MGImage1 from '../../images/projects/medicgestion1.png';
import MGImage2 from '../../images/projects/medicgestion2.png';
import MGImage3 from '../../images/projects/medicgestion3.png';
import PortfolioImage from '../../images/projects/portfolio.png';
import WordlyImage from '../../images/projects/wordly.png';
import logo from '../../images/ressources/wwdc.png';
import { Project } from './Project';
import { Section } from './Section';

export default function PageContent({ data }) {
  const { trackEvent } = useMatomo();

  return (
    <div className='dark:bg-gray-800 dark:text-white'>
      <ReactFullpage
        licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
        navigation={true}
        navigationPosition='right'
        keyboardScrolling={true}
        animateAnchor={true}
        scrollBar={false}
        responsiveWidth={320}
        credits={false}
        anchors={[
          'hello',
          'about',
          'p-covidfrance',
          'p-medicgestion',
          'p-diskarr',
          'p-portfolio',
          'p-wordly',
          'p-correcteur',
        ]}
        afterLoad={(origin, destination, direction) => {
          if (destination.anchor !== origin.anchor) {
            trackEvent({
              category: 'Scroll ' + direction,
              action: origin.anchor + ' -> ' + destination.anchor,
            });
          }
        }}
        render={({ _state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Section
                title={['Bonjour', 'Hello', 'Hola', 'Ciao', 'Hallo']}
                subtitle='Bienvenue sur mon portfolio !'
                button='Découvrir'
                fullpage={fullpageApi}
              />

              <Project
                name='À propos de moi'
                presentation={true}
                pictures={[[logo, 'Logo', 'Logo', 'w-[40%] md:w-[40%]']]}
              />

              <Project
                name='CovidFrance'
                year='2020'
                description={[
                  `CovidFrance est un projet open-source dont je suis l'auteur.
                   Il s'agit d'un bot Twitter qui diffusait chaque jour les
                   statistiques de la COVID-19 en France.`,
                  `Ce projet existe aussi pour le suivi de la vaccination. Le compte est suivi par plus de 30 000 personnes.`,
                ]}
                technologies={[
                  'devicon-python-plain-wordmark',
                  'devicon-twitter-original text-[30px]',
                  'devicon-jupyter-plain-wordmark',
                ]}
                githubLink={data.site.siteMetadata.githubUrl + '/COVID19_FR'}
                pictures={[
                  [
                    CovidFranceImage,
                    "Capture d'écran d'un tweet du compte",
                    "Capture d'écran d'un tweet du compte",
                  ],
                ]}
              />

              <Project
                name='MedicGestion'
                year='2021'
                description={[
                  `Application web permettant à une infrastructure médicale de gérer des patients 
                  tout en passant par la prise de rendez-vous via une interface ergonomique.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-css3-plain-wordmark',
                  'devicon-php-plain',
                  'devicon-mysql-plain-wordmark',
                  'devicon-heroku-original-wordmark',
                ]}
                pictures={[
                  [
                    MGImage1,
                    "Capture d'écran du logiciel MedicGestion",
                    'Page de connexion',
                  ],
                  [
                    MGImage2,
                    "Capture d'écran du logiciel MedicGestion",
                    'Gestion des patients',
                  ],
                  [
                    MGImage3,
                    "Capture d'écran du logiciel MedicGestion",
                    'Edition des patients',
                  ],
                ]}
              />

              <Project
                name='Diskarr'
                year='2021'
                description={[
                  `Diskarr est un projet open-source en cours de développement.`,
                  `Ceci est le site vitrine pour expliquer l'objectif du projet
                  et ses différentes fonctionnalités.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-sass-original',
                  'devicon-nodejs-plain-wordmark',
                  'devicon-javascript-plain',
                ]}
                pictures={[
                  [
                    DiskarrImage,
                    "Capture d'écran du site Diskarr",
                    "Capture d'écran du site Diskarr",
                  ],
                ]}
              />

              <Project
                name='Portfolio personnel'
                year='2022'
                description={[
                  `Ce site est un portfolio personnel. Il permet de découvrir
                  mes compétences et mes projets.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-tailwindcss-plain',
                  'devicon-react-original-wordmark',
                  'devicon-gatsby-plain text-[30px]',
                ]}
                pictures={[[PortfolioImage, 'Illustration', 'Illustration']]}
                githubLink={data.site.siteMetadata.githubUrl + '/www.xrths.fr'}
              />

              <Project
                name='Wordly'
                year='2022'
                description={[
                  `Jeu similaire au célèbre Motus, un mot est sélectionné aléatoirement chaque
                  jour et le joueur doit le trouver le plus vite possible en
                  faisant le moins d'essais possibles.`,
                  `Le joueur peut partager son résultat et voir les meilleurs
                  scores sur le site.`,
                ]}
                technologies={[
                  'devicon-html5-plain-wordmark',
                  'devicon-css3-plain-wordmark',
                  'devicon-javascript-plain',
                ]}
                githubLink={data.site.siteMetadata.githubUrl + '/Wordly'}
                gameLink={data.site.siteMetadata.wordlyUrl}
                pictures={[
                  [
                    WordlyImage,
                    'Démonstration de Wordly',
                    'Démonstration de Wordly',
                  ],
                ]}
              />

              <Project
                name='Correcteur orthographique'
                year='2022'
                description={[
                  `Programme permettant de proposer une version corrigé d'un mot.`,
                  `Le programme utilise un dictionnaire de mots français et un algorithme de correction.`,
                ]}
                technologies={['devicon-java-plain-wordmark']}
                pictures={[
                  [
                    CorrecteurImage,
                    'Démonstration du correcteur orthographique',
                  ],
                ]}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
