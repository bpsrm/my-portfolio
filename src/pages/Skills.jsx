import { Container, Row, Col } from "react-bootstrap";

import { abilities } from "../data/abilities";

export const Skills = () => {
  const frontend = abilities.frontend.map((frontend) => {
    return (
      <div key={frontend.id} className="box-skills">
        <img src={frontend.icon} className="img-fluid me-2" />
        <h6>{frontend.skill}</h6>
      </div>
    );
  });

  const backend = abilities.backend.map((backend) => {
    return (
      <div key={backend.id} className="box-skills">
        <img src={backend.icon} className="img-fluid me-2" />
        <h6>{backend.skill}</h6>
      </div>
    );
  });

  const tools = abilities.tools.map((tool) => {
    return (
      <div key={tool.id} className="box-skills">
        <img src={tool.icon} className="img-fluid me-2" />
        <h6>{tool.skill}</h6>
      </div>
    );
  });

  return (
    <>
      <Container className="pb-5 mb-2">
        <div className="section-head">
          <h6 className="subtitle">Abilities</h6>
          <h4 className="title">My Skills</h4>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className="frontend-box">
              <h5>Frontend developer</h5>
              <div className="skills-content">{frontend}</div>
            </div>
          </Col>
          <Col xs={12} md={6} className="mt-4 mt-md-0">
            <div className="backend-box">
              <h5>Backend developer</h5>
              <div className="skills-content">{backend}</div>
            </div>
          </Col>
          <Col xs={12} className="mt-4">
            <div className="backend-box">
              <h5>Tools</h5>
              <div className="skills-content">{tools}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
