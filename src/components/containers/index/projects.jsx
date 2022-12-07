import React from "react";
import { Project } from "../../sections/project";
import CovidFranceImage1 from "../../../images/projects/covidfrance/1.png";
import CovidFranceImage2 from "../../../images/projects/covidfrance/2.png";
import MedicGestion1 from "../../../images/projects/medicgestion/1.png";
import MedicGestion2 from "../../../images/projects/medicgestion/2.png";
import MedicGestion3 from "../../../images/projects/medicgestion/3.png";
import Wordly1 from "../../../images/projects/wordly/1.png";

export function ProjectsPresentation({ data }) {
  return (
    <React.Fragment>
      <Project
        title="CovidFrance"
        date="2020"
        description={
          <p>
            CovidFrance est un projet open-source dont je suis l'auteur.
            <br />
            Il s'agit d'un bot Twitter qui diffusait chaque jour les
            statistiques de la COVID-19 en France.
            <br />
            Ce projet existe aussi pour le suivi de la vaccination.
            <br />
            Le compte était suivi par plus de 30 000 personnes.
          </p>
        }
        technologies={[
          "devicon-python-plain-wordmark",
          "devicon-twitter-original text-[30px]",
          "devicon-jupyter-plain-wordmark"
        ]}
        images={[CovidFranceImage1, CovidFranceImage2]}
        twitter="https://twitter.com/CovidFrance"
        github={data.site.siteMetadata.githubUrl + "/COVID19_FR"}
      />

      <Project
        title="MedicGestion"
        date="2021"
        description={
          <p>
            Application web permettant à une infrastructure médicale de gérer
            des patients tout en passant par la prise de rendez-vous via une
            interface ergonomique.
          </p>
        }
        technologies={[
          "devicon-html5-plain-wordmark",
          "devicon-css3-plain-wordmark",
          "devicon-php-plain",
          "devicon-mysql-plain-wordmark",
          "devicon-heroku-original-wordmark"
        ]}
        images={[MedicGestion1, MedicGestion2, MedicGestion3]}
      />

      <Project
        title="Wordly"
        date="2021"
        description={
          <p>
            Jeu similaire au célèbre Motus, un mot est sélectionné aléatoirement
            chaque jour et le joueur doit le trouver le plus vite possible en
            faisant le moins d'essais possibles.
            <br />
            Le joueur peut partager son résultat et voir les meilleurs scores
            sur le site.
          </p>
        }
        technologies={[
          "devicon-html5-plain-wordmark",
          "devicon-css3-plain-wordmark",
          "devicon-javascript-plain"
        ]}
        images={[Wordly1]}
        github={data.site.siteMetadata.githubUrl + "/Wordly"}
        play={data.site.siteMetadata.wordlyUrl}
      />

      <Project
        title="Correcteur orthographique"
        date="2022"
        description={
          <p>
            Programme permettant de proposer une version corrigée d'un mot.
            <br />
            Le programme utilise un dictionnaire de mots français et un
            algorithme de correction.
          </p>
        }
        technologies={["devicon-java-plain-wordmark"]}
        ascii="1.cast"
      />
    </React.Fragment>
  );
}
