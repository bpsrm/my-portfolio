/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../assets/about-pic.jpg";

export const About = () => {
  return (
    <>
      <Container className="pb-5">
        <div className="section-head">
          <h6 className="subtitle">Info</h6>
          <h4 className="title">About Me</h4>
        </div>

        <Row className="about-content flex-column-reverse flex-md-row">
          <Col
            xs={12}
            md={6}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <div className="about-img">
              <img src={Profile} alt="" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <p className="about-msg">
              My name is <span className="fw-bold">Ponpitak Sirimart</span>, and
              I am a recent graduate with a strong interest in pursuing a career
              related to web development, particularly as a
              <span className="fw-bold"> Front End Developer.</span> Personally,
              I am deeply passionate about programming and eager to enhance my
              skills to excel in this field. <br />
              <br />
              In my fourth year at Silpakorn University, I worked on a Senior
              Project titled "VoiceBrary." This project involved creating a web
              application aimed at assisting individuals who are visually
              impaired.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
