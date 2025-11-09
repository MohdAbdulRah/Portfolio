/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Sensor Fault Detection",
    description:
      "Developed a Flask-based ML platform enabling users to interact with predictive models and visualize outcomes in real time, improving accessibility and decision accuracy by 40%. Implemented EDA and preprocessing pipelines with 88% prediction accuracy.",
    url: "https://github.com/MohdAbdulRah/Sensor_Fault_Detection",
  },
  {
    title: "Task War",
    description:
      "Built an interactive task management platform that gamifies productivity, allowing users to earn rewards for completing daily tasks. Integrated leaderboards, improved engagement by 45%, and optimized frontend and backend performance using MERN stack.",
    url: "https://github.com/MohdAbdulRah/taskWarr",
  },
  {
    title: "WanderLust",
    description:
      "Created a full-stack rental platform where users can list, edit, and manage property listings with authentication and reviews. Optimized backend with Express and MongoDB, improving data retrieval by 40%. Deployed on Render for scalability.",
    url: "https://github.com/MohdAbdulRah/MajorProject",
  },
  {
    title: "Diabetes Prediction",
    description:
      "Built a supervised ML model to predict diabetes likelihood using diagnostic data with 90% accuracy. Implemented preprocessing and evaluation with Scikit-learn and deployed via Flask for real-time predictions on Render.",
    url: "https://github.com/MohdAbdulRah/DiabetesPrediction",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
