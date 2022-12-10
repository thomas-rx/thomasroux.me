import React from "react";
import {Project} from "../../sections/project";
import {graphql, useStaticQuery} from "gatsby";

export function Projects({data}) {
    const images = useStaticQuery(graphql`
        query {
          CovidFranceImage1: file(relativePath: { eq: "projects/covidfrance/1.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          CovidFranceImage2: file(relativePath: { eq: "projects/covidfrance/2.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          MedicGestion1: file(relativePath: { eq: "projects/medicgestion/1.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        
          MedicGestion2: file(relativePath: { eq: "projects/medicgestion/2.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          MedicGestion3: file(relativePath: { eq: "projects/medicgestion/3.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          Wordly1: file(relativePath: { eq: "projects/wordly/1.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 600
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
    `);

    return (
        <React.Fragment>
            <Project
                title="CovidFrance"
                date="2020"
                description={
                    <p>
                        CovidFrance est mon premier projet. Il s'agit d'un bot Twitter qui publiait des statistiques sur
                        la COVID-19
                        en 2020 et 2021.
                        <br/>
                        Réalisé avec Python, il utilisait les données fournies par Santé Publique France.
                        <br/><br/>
                        Ce projet m'a permis de découvrir le développement en Python et de me familiariser avec les API
                        et
                        l'open-source.
                        <br/>
                        Relayé par <a className="text-primaryLight dark:text-primaryDark"
                                      href="https://twitter.com/Mediavenir"
                                      target="_blank" rel="noreferrer">Mediavenir</a>, il est suivi par plus de 30 000
                        personnes.
                    </p>
                }
                technologies={[
                    "devicon-python-plain-wordmark",
                    "devicon-twitter-original text-[30px]",
                    "devicon-jupyter-plain-wordmark"
                ]}
                images={[images.CovidFranceImage1, images.CovidFranceImage2]}
                twitter="https://twitter.com/CovidFrance"
                github={data.site.siteMetadata.githubUrl + "/COVID19_FR"}
            />

            <Project
                title="MedicGestion"
                date="2021"
                description={
                    <p>
                        Application web développée en PHP ainsi qu'avec le framework TailwindCSS.
                        <br/>
                        Elle permet de gérer les rendez-vous des patients d'un cabinet médical.
                    </p>
                }
                technologies={[
                    "devicon-html5-plain-wordmark",
                    "devicon-css3-plain-wordmark",
                    "devicon-php-plain",
                    "devicon-mysql-plain-wordmark",
                    "devicon-heroku-original-wordmark"
                ]}
                images={[images.MedicGestion1, images.MedicGestion2, images.MedicGestion3]}
            />

            <Project
                title="Wordly"
                date="2021"
                description={
                    <p>
                        Jeu similaire au célèbre Motus, un mot est sélectionné aléatoirement
                        chaque jour et le joueur doit le trouver le plus vite possible en
                        faisant le moins d'essais possibles.
                        <br/>
                        Réalisé avec JavaScript, il utilise un dictionnaire de mots Français.
                        <br/><br/>
                        Ce projet m'a permis de découvrir le développement en JavaScript et de me familiariser avec
                        Netlify.
                    </p>
                }
                technologies={[
                    "devicon-html5-plain-wordmark",
                    "devicon-css3-plain-wordmark",
                    "devicon-javascript-plain"
                ]}
                images={[images.Wordly1]}
                github={data.site.siteMetadata.githubUrl + "/Wordly"}
                play={data.site.siteMetadata.wordlyUrl}
            />

            <Project
                title="Correcteur orthographique"
                date="2022"
                description={
                    <p>
                        Ce programme est capable de proposer une ou plusieurs corrections en fonction de la <a
                        className="text-primaryLight dark:text-primaryDark"
                        href="https://fr.wikipedia.org/wiki/Distance_de_Levenshtein" target="_blank" rel="noreferrer">distance
                        de
                        Levenshtein</a>.
                        <br/><br/>
                        Réalisé avec Java, il utilise un algorithme de correction de mots basé sur le nombre de <a
                        className="text-primaryLight dark:text-primaryDark"
                        href="https://fr.wikipedia.org/wiki/Digramme"
                        target="_blank" rel="noreferrer">digrammes</a>.
                        <br/>
                        Il est possible de l'utiliser facilement et comporte peu de code.
                    </p>
                }
                technologies={["devicon-java-plain-wordmark"]}
                ascii="1.cast"
                github={data.site.siteMetadata.githubUrl}
            />
        </React.Fragment>
    );
}