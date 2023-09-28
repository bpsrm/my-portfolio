import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import { Banner } from "./Banner";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const Main = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".fade-in");
    const offset = 50;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop - offset <= window.innerHeight && sectionBottom >= 20) {
        setVisibleSections((prevVisibleSections) => [
          ...prevVisibleSections,
          section.id,
        ]);
      } else {
        setVisibleSections((prevVisibleSections) =>
          prevVisibleSections.filter((id) => id !== section.id)
        );
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    </>
  );
};
