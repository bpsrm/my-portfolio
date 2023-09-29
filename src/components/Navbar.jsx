import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/bpsrm-logo.webp";
import { SwitchToggle } from "./Theme-Switch";
import { Link } from "react-scroll";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".fade-in");
    const offset = 10;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - offset;
      const sectionBottom = section.offsetTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      handleScroll();
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled navbar-bg" : ""}>
      <Container fluid>
        <Navbar.Brand
          href="/"
          className="text-center me-0"
          style={{ width: "100px" }}
        >
          <img src={Logo} alt="" className="w-50 logo" />
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto justify-content-evenly w-100">
            <div></div>
            <div className="d-lg-flex justify-content-center align-items-center">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("home")}
                className={`nav-link navbar-link ${
                  activeSection === "home" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("about")}
                className={`nav-link navbar-link ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("skills")}
                className={`nav-link navbar-link ${
                  activeSection === "skills" ? "active" : ""
                }`}
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("projects")}
                className={`nav-link navbar-link ${
                  activeSection === "projects" ? "active" : ""
                }`}
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("experiences")}
                className={`nav-link navbar-link ${
                  activeSection === "experiences" ? "active" : ""
                }`}
              >
                Experiences
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("contact")}
                className={`nav-link navbar-link ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </div>
            <SwitchToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
