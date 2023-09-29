import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import { Banner } from "./Banner";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Experience } from "./Experience";
import { Contact } from "./Contact";

export const Main = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".fade-in");
    const offset = 10;

    const newVisibleSections = [];

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop - offset <= window.innerHeight && sectionBottom >= 20) {
        newVisibleSections.push(section.id);
      }
    });

    setVisibleSections(newVisibleSections);
  };

  useEffect(() => {
    const throttledScrollHandler = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      <div
        id="about"
        className={`fade-in ${
          visibleSections.includes("about") ? "active" : ""
        }`}
      >
        <About />
      </div>
      <div
        id="skills"
        className={`fade-in ${
          visibleSections.includes("skills") ? "active" : ""
        }`}
      >
        <Skills />
      </div>
      <div
        id="projects"
        className={`fade-in ${
          visibleSections.includes("projects") ? "active" : ""
        }`}
      >
        <Projects />
      </div>
      <div
        id="experiences"
        className={`fade-in ${
          visibleSections.includes("experiences") ? "active" : ""
        }`}
      >
        <Experience />
      </div>
      <div
        id="contact"
        className={`fade-in ${
          visibleSections.includes("contact") ? "active mt-2" : ""
        }`}
      >
        <Contact />
      </div>
    </>
  );
};
