import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/bpsrm-logo.webp";
import { SwitchToggle } from "./Theme-Switch";
import { Link } from "react-scroll";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled navbar-bg" : ""}>
      <Container fluid>
        <Navbar.Brand
          href="/"
          className="text-center me-0"
          style={{ width: "100px" }}
        >
          <img src={Logo} alt="" className="w-50" />
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
          <Nav className="me-auto justify-content-center w-100">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link navbar-link"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link navbar-link"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link navbar-link"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link navbar-link"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link navbar-link"
            >
              Experiences
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link navbar-link"
            >
              Contact
            </Link>
          </Nav>
          <Nav
            style={{
              width: "100px",
            }}
          >
            <Nav.Item
              className="ms-3 ms-lg-0 mt-3 mt-lg-0 w-100"
              style={{ height: "40px", padding: "10px" }}
            >
              <SwitchToggle />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;