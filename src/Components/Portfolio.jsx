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
import image from "../images/meeting.png";

const imageAltText = "meeting";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Car Sales Dashboard",
    description:
      "a dynamic car sales analysis dashboard created using Microsoft Power BI, uncovering sales trends",
    url: "https://github.com/darshaasif/Car-Sales-Analysis-with-Power-BI",
  },
  {
    title: "Web Scraping & Data Cleaning",
    description:
      "Contributes in web scraping and data cleaning through different tools",
    url: "https://github.com/darshaasif/Web-Scraping-Data-cleaning",
  },
  {
    title: "Data Visualization",
    description:
      "Created different visualization using different datasets and using advance PowerBI and DAX functions ",
    url: "https://github.com/darshaasif/Data-Visualization",
  },
  {
    title: "Virtual Internship Projects",
    description:
      "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions & Prepared a PowerPoint deck and video  presentation to communicate key insights for the client and internal stakeholder",
    url: "https://github.com/darshaasif/Accenture-Internship",
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
