import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import { SectionProject } from '../components/SectionProject'
import { SectionTitle } from '../components/SectionTitle'
import { SectionContact } from '../components/SectionContact'

import WordlyImage from '../images/wordly/img1.png'
import MGImage1 from '../images/medicgestion/img1.png'
import MGImage2 from '../images/medicgestion/img2.png'
import MGImage3 from '../images/medicgestion/img3.png'
import DiskarrImage from '../images/diskarr/img1.png'
import CovidFranceImage from '../images/covidfrance/img1.png'
import PortfolioImage from '../images/portfolio/img1.png'
import InfluxImage from '../images/influxdb/img1.png'
import HospitalImage from '../images/chp/img1.jpeg'
import PyrescomImage from '../images/pyrescom/img1.jpeg'

import { useMatomo } from '@datapunt/matomo-tracker-react'

export default function App({ data }) {
    const { trackPageView, trackEvent } = useMatomo()
    
    React.useEffect(() => {
        trackPageView()
    }, [])

    return (
        <div className="dark:bg-gray-800 dark:text-white font-ubuntu">
            <ReactFullpage
                navigation={true}
                navigationPosition="right"
                keyboardScrolling={true}
                animateAnchor={true}
                scrollBar={false}
                responsiveWidth={320}
                anchors={[
                    'home',
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
                    trackEvent({
                        category: 'Scroll',
                        action: origin.anchor + ' -> ' + destination.anchor,
                        name: direction,
                    })
                }}
                render={({ _state, fullpageApi }) => {
                    return (
                        <div id="fullpage-wrapper">
                            <SectionTitle
                                title="Thomas ROUX"
                                btnText="Découvrir mon portfolio"
                                fullpageApi={fullpageApi}
                            />

                            <SectionProject
                                name="Wordly"
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
                                githubLink={
                                    data.site.siteMetadata.githubLink +
                                    '/Wordly'
                                }
                                gameLink={data.site.siteMetadata.wordlyLink}
                                pictures={[
                                    [
                                        WordlyImage,
                                        'Démonstration de Wordly',
                                        'Démonstration de Wordly',
                                    ],
                                ]}
                            />

                            <SectionProject
                                name="MedicGestion"
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
                                name="Diskarr"
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
                                name="CovidFrance"
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
                                githubLink={
                                    data.site.siteMetadata.githubLink +
                                    '/COVID19_FR'
                                }
                                pictures={[
                                    [
                                        CovidFranceImage,
                                        "Capture d'écran d'un tweet du compte",
                                        "Capture d'écran d'un tweet du compte",
                                    ],
                                ]}
                            />

                            <SectionProject
                                name="Synchronisation InfluxDB"
                                description={[
                                    `Il s'agit d'un projet de synchronisation de données sur une
                  base InfluxDB.`,
                                    `Il permet de récupérer des données brutes issues de
                  différents capteurs (IOT), de les traiter et de les stocker dans
                  une base de données InfluxDB.`,
                                    `Ce programme se démarque par ses performances.`,
                                ]}
                                technologies={[
                                    'devicon-go-original-wordmark text-[50px]',
                                ]}
                                pictures={[
                                    [
                                        InfluxImage,
                                        'Interface InfluxDB',
                                        "Image de l'interface InfluxDB",
                                    ],
                                ]}
                            />

                            <SectionProject
                                name="Portfolio personnel"
                                description={[
                                    `Ce site est un portfolio personnel. Il permet de découvrir
                  mes compétences et mes projets.`,
                                ]}
                                technologies={[
                                    'devicon-html5-plain-wordmark',
                                    'devicon-tailwindcss-plain',
                                    'devicon-react-original-wordmark',
                                ]}
                                pictures={[
                                    [
                                        PortfolioImage,
                                        'Illustration',
                                        'Illustration',
                                    ],
                                ]}
                                githubLink={
                                    data.site.siteMetadata.githubLink +
                                    '/www.xrths.fr'
                                }
                            />

                            <SectionTitle
                                title="Expériences"
                                btnText="Découvrir mes expériences"
                                fullpageApi={fullpageApi}
                            />

                            <SectionProject
                                name="Centre Hospitalier de Perpignan"
                                description={[
                                    `En charge de collaborer avec l'équipe responsable de l'infrastructure système et réseau du Centre Hospitalier de Perpignan.`,

                                    `Durant cette expérience, j'ai pu découvrir l'organisation du système d'information dans une infrastructure aussi critique.`,

                                    `J'ai découvert comment s'organisait le service informatique d'un établissement comptant plus de 10 000 appareils sur son réseau.`,
                                ]}
                                linkedinLink={
                                    data.site.siteMetadata.linkedinLink
                                }
                                pictures={[
                                    [
                                        HospitalImage,
                                        'Illustration',
                                        'Illustration',
                                    ],
                                ]}
                            />

                            <SectionProject
                                name="Pyrescom"
                                description={[
                                    `Pyrescom est une société française fournissant des solutions connectées (IoT).`,
                                    `J'ai eu l'occasion d'intégrer la société pour un stage de fin d'études.`,
                                    `Au sein du bureau d'études, j'ai assisté les équipes dans le développement web de ses différents projets.`,
                                ]}
                                linkedinLink={
                                    data.site.siteMetadata.linkedinLink
                                }
                                pictures={[
                                    [
                                        PyrescomImage,
                                        'Illustration',
                                        'Illustration',
                                    ],
                                ]}
                            />

                            <SectionContact
                                linkedinLink={
                                    data.site.siteMetadata.linkedinLink
                                }
                                githubLink={data.site.siteMetadata.githubLink}
                                mail={data.site.siteMetadata.email}
                                maltLink={data.site.siteMetadata.maltLink}
                            />
                        </div>
                    )
                }}
            />
        </div>
    )
}
