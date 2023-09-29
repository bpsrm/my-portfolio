import { Container, Row, Col } from "react-bootstrap";

import { experience } from "../data/exp";

export const Experience = () => {
  const exp = experience.map((exp) => {
    return (
      <Row key={exp.id} className="my-3 justify-content-center">
        <Col xs={12} md={10}>
          <ul className="d-flex px-0">
            <div className="element-group">
              <div className="circle-exp"></div>
              <div className="line-exp"></div>
            </div>
            <li className="event-list w-100">
              <h4 className="exp-title">{exp.event}</h4>
              <span className="exp-location-date">
                {exp.location} -{" "}
                <b style={{ color: "var(--primary-color)" }}>{exp.year}</b>
              </span>
              <p className="exp-desc">{exp.desc}</p>
              {exp.img && <img src={exp.img} alt="" className="exp-img" />}
              {exp.link && (
                <a
                  href={exp.link}
                  className="btn-setting btn-exp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square pe-3"></i>
                  Explore
                </a>
              )}
            </li>
          </ul>
        </Col>
      </Row>
    );
  });

  return (
    <>
      <Container className="pb-5">
        <div className="section-head">
          <h6 className="subtitle">Activity</h6>
          <h4 className="title">My Experience</h4>
        </div>
        {exp}
      </Container>
    </>
  );
};
