import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

export const NavFooter = () => {
  return (
    <Container>
      <div className="link-footer mt-5">
        <Link to="about" spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="experiences" spy={true} smooth={true} duration={500}>
          Experiences
        </Link>
      </div>
    </Container>
  );
};
