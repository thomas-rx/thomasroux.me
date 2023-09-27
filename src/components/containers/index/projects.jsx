import React from "react";
import { Project } from "../../sections/project";
import { graphql, useStaticQuery } from "gatsby";

export function Projects({ data }) {
  const images = useStaticQuery(graphql`
    query {
      CovidFranceImage1: file(
        relativePath: { eq: "projects/covidfrance/1.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: DOMINANT_COLOR
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      CovidFranceImage2: file(
        relativePath: { eq: "projects/covidfrance/2.png" }
      ) {
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
      EssenCiel1: file(relativePath: { eq: "projects/essenciel/1.png" }) {
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
            CovidFrance was my inaugural project, designed as a Twitter bot that
            disseminated COVID-19 statistics throughout 2020 and 2021.
            <br />
            Crafted with Python, it harnessed data provided by France's Public
            Health agency.
            <br />
            <br />
            This endeavor not only introduced me to Python development but also
            helped me gain proficiency with APIs and the open-source realm.
            <br />
            Amplified by{" "}
            <a
              className="text-primaryLight dark:text-primaryDark"
              href="https://twitter.com/Mediavenir"
              target="_blank"
              rel="noreferrer"
            >
              Mediavenir
            </a>
            , it garnered the attention of over 30,000 individuals.
          </p>
        }
        technologies={[
          "devicon-python-plain-wordmark",
          "devicon-twitter-original text-[30px]",
          "devicon-jupyter-plain-wordmark",
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
            A web application crafted with PHP and the TailwindCSS framework.
            <br />
            It streamlines the management of patient appointments for a medical
            clinic.
          </p>
        }
        technologies={[
          "devicon-html5-plain-wordmark",
          "devicon-css3-plain-wordmark",
          "devicon-php-plain",
          "devicon-mysql-plain-wordmark",
          "devicon-heroku-original-wordmark",
        ]}
        images={[
          images.MedicGestion1,
          images.MedicGestion2,
          images.MedicGestion3,
        ]}
      />

      <Project
        title="Wordly"
        date="2021"
        description={
          <p>
            A game inspired by the renowned "Motus", where a word is randomly
            chosen every day and the player's challenge is to guess it in the
            fewest attempts and as quickly as possible.
            <br />
            Developed using JavaScript, it draws upon a French word dictionary.
            <br />
            <br />
            This project introduced me to JavaScript development and provided a
            chance to familiarize myself with Netlify.
          </p>
        }
        technologies={[
          "devicon-html5-plain-wordmark",
          "devicon-css3-plain-wordmark",
          "devicon-javascript-plain",
        ]}
        images={[images.Wordly1]}
        github={data.site.siteMetadata.githubUrl + "/Wordly"}
      />

      <Project
        title="Spelling Corrector"
        date="2022"
        description={
          <p>
            This program can suggest one or multiple corrections based on the{" "}
            <a
              className="text-primaryLight dark:text-primaryDark"
              href="https://en.wikipedia.org/wiki/Levenshtein_distance"
              target="_blank"
              rel="noreferrer"
            >
              Levenshtein distance
            </a>
            .
            <br />
            <br />
            Crafted in Java, it employs a word correction algorithm rooted in
            the count of{" "}
            <a
              className="text-primaryLight dark:text-primaryDark"
              href="https://en.wikipedia.org/wiki/Digram"
              target="_blank"
              rel="noreferrer"
            >
              digrams
            </a>
            .
            <br />
            It's user-friendly and comprises a concise codebase.
          </p>
        }
        technologies={["devicon-java-plain-wordmark"]}
        ascii="1.cast"
        github={data.site.siteMetadata.githubUrl}
      />

      <Project
        title="EssenCiel"
        date="May 2023 - Present"
        description={
          <p>
            EssenCiel is a dedicated mobile app designed to guide drivers in
            locating gas stations effortlessly. It provides real-time
            information about fuel prices, availability, and station amenities,
            making it the ideal companion for drivers seeking the best fueling
            options nearby.
            <br />
            <br />
            Coming soon to the App Store and Google Play Store.
          </p>
        }
        technologies={[
          "devicon-docker-plain-wordmark",
          "devicon-react-original-wordmark",
          "devicon-mongodb-plain-wordmark",
          "devicon-typescript-plain",
          "devicon-swift-plain",
          // ... Add other relevant icons
        ]}
        images={[images.EssenCiel1]} // Add relevant images if available
        launch="https://bento.me/essenciel"
        github={"https://github.com/EssenCiel"}
        // .metadata.githubUrl + "/EssenCiel"}
      />
    </React.Fragment>
  );
}
