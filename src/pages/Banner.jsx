/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import { Particle } from "../components/Particle-Net";
import Profile from "../assets/profile.png";
import TypingEffect from "react-typing-effect";

export const Banner = () => {
  return (
    <>
      <Container className="banner" id="home">
        <Particle />
        <Row className="flex-column-reverse flex-md-row">
          <Col xs={12} md={6} className="banner-left px-3">
            <p className="text-uppercase">portfolio/2023</p>
            <h1>
              Hello, I'm <span>Bank!</span>
            </h1>
            <TypingEffect
              text={[
                "Ponpitak Sirimart.",
                "I'm a web developer.",
                "Recent Graduate.",
              ]}
              speed={100}
              eraseDelay={200}
              className="typing-effect"
              style={{ color: "var(--text-color)" }}
            />
            <div className="d-flex mt-4">
              <a
                href="https://github.com/bpsrm"
                className="btn-setting btn-banner-left"
              >
                <i className="fa-brands fa-github pe-3"></i> Github
              </a>
              <a
                href="https://github.com/bpsrm"
                className="btn-setting btn-banner-right ms-4"
              >
                <i className="fa-solid fa-file pe-3"></i> Resume
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className="banner-right px-3">
            <img src={Profile} alt="" className="img-profile" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
