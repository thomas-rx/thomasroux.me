import { useMatomo } from '@datapunt/matomo-tracker-react';
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from 'react';

import HospitalImage from '../../images/pro/hopital.jpeg';
import PyrescomImage from '../../images/pro/iot.jpeg';
import CovidFranceImage from '../../images/projects/covidfrance1.png';
import DiskarrImage from '../../images/projects/diskarr.png';
import InfluxImage from '../../images/projects/influxdb.png';
import MGImage1 from '../../images/projects/medicgestion1.png';
import MGImage2 from '../../images/projects/medicgestion2.png';
import MGImage3 from '../../images/projects/medicgestion3.png';
import PortfolioImage from '../../images/projects/portfolio.png';
import WordlyImage from '../../images/projects/wordly.png';
import LogoBlackImage from '../../images/ressources/logo-black.png';
import LogoWhiteImage from '../../images/ressources/logo-white.png';
import { SectionContact } from './SectionContact';
import { SectionProject } from './SectionProject';
import { SectionTitle } from './SectionTitle';

export default function PageContent({ data }) {
  const { trackEvent } = useMatomo();

  let logoImage = LogoBlackImage;

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkMode.matches) {
      logoImage = LogoWhiteImage;
    } else {
      logoImage = LogoBlackImage;
    }
  }, []);

  return (
    <div className='dark:bg-gray-800 dark:text-white font-ubuntu'>
      <ReactFullpage
        navigation={true}
        navigationPosition='right'
        keyboardScrolling={true}
        animateAnchor={true}
        scrollBar={false}
        responsiveWidth={320}
        credits={false}
        //verticalCentered={true}
        anchors={[
          'hello',
          'about',
          'p-wordly',
          'p-medicgestion',
          'p-diskarr',
          'p-covidfrance',
          'p-goSync',
          'p-portfolio',
          'w-professionnel',
          'w-hopital-perpignan',
          'w-pyrescom',
          'contact',
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
              <SectionTitle
                title='Thomas R.'
                btnText='Découvrir'
                description='• Étudiant & Freelance •'
                fullpageApi={fullpageApi}
              />

              <SectionProject
                name='À propos'
                pictures={[[logoImage, 'Logo', 'Logo', 'w-[40%] md:w-[40%]']]}
              />

              <SectionProject
                name='Wordly'
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

              <SectionProject
                name='MedicGestion'
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

              <SectionProject
                name='Diskarr'
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

              <SectionProject
                name='CovidFrance'
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

              <SectionProject
                name='Synchronisation InfluxDB'
                description={[
                  `Il s'agit d'un projet de synchronisation de données sur une
                  base de données InfluxDB.`,
                  `Il permet de récupérer des données brutes issues de
                  différents capteurs (IoT), de les traiter et de les stocker dans
                  la base.`,
                ]}
                technologies={['devicon-go-original-wordmark text-[50px]']}
                pictures={[
                  [
                    InfluxImage,
                    'Interface InfluxDB',
                    "Image de l'interface InfluxDB",
                  ],
                ]}
              />

              <SectionProject
                name='Portfolio personnel'
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

              <SectionTitle
                title='Expériences'
                btnText='Découvrir'
                description=''
                fullpageApi={fullpageApi}
              />

              <SectionProject
                name='Centre Hospitalier de Perpignan'
                description={[
                  `En charge de collaborer avec l'équipe responsable de l'infrastructure système et réseau du Centre Hospitalier de Perpignan.`,
                  `Durant cette expérience, j'ai pu découvrir l'organisation du système d'information dans une infrastructure aussi critique.`,
                  `J'ai découvert comment s'organisait le service informatique d'un établissement comptant plus de 10 000 appareils sur son réseau.`,
                ]}
                linkedinLink={data.site.siteMetadata.linkedinUrl}
                pictures={[[HospitalImage, 'Illustration', 'Illustration']]}
              />

              <SectionProject
                name='Pyrescom'
                description={[
                  `Pyrescom est une société française fournissant des solutions connectées (IoT).`,
                  `J'ai eu l'occasion d'intégrer la société pour un stage de fin d'études.`,
                  `Au sein du bureau d'études, j'ai assisté les équipes dans le développement de leurs projets.`,
                ]}
                linkedinLink={data.site.siteMetadata.linkedinUrl}
                pictures={[[PyrescomImage, 'Illustration', 'Illustration']]}
              />

              <SectionContact
                linkedinLink={data.site.siteMetadata.linkedinUrl}
                githubLink={data.site.siteMetadata.githubUrl}
                mail={data.site.siteMetadata.email}
                maltLink={data.site.siteMetadata.maltUrl}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
