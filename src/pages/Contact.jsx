import { Container, Row, Col } from "react-bootstrap";
import { contact } from "../data/contact";

import profile from "../assets/profile-footer.jpg";

export const Contact = () => {
  const social = contact.map((social) => {
    return (
      <a
        href={social.link}
        target="_blank"
        rel="noreferrer"
        className="social-box"
        key={social.id}
      >
        <i className={social.icon}></i>
      </a>
    );
  });

  return (
    <Container className="pb-4">
      <div className="section-head">
        <h6 className="subtitle">Social Media</h6>
        <h4 className="title">My Contact</h4>
      </div>
      <Row className="mt-5 justify-content-center text-center">
        <Col xs={12}>
          <img src={profile} alt="" className="img-footer" />
          <h4 className="footer-name">Ponpitak S.</h4>
        </Col>

        <div className="d-flex justify-content-center align-items-center my-3">
          {social}
        </div>

        <div className="copy-right">
          © 2023 Ponpitak Sirimart. All rights reserved.
        </div>
      </Row>
    </Container>
  );
};
