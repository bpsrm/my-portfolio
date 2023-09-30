/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";

import { projects } from "../data/projects";

const ProjectDisplay = ({ projects, handleShowModal }) => {
  const work = projects;

  return (
    <>
      {work.map((works) => (
        <Col xs={12} md={6} lg={4} key={works.id} className="my-3">
          <Card className="project-box" onClick={() => handleShowModal(works)}>
            <img src={works.img} alt={works.title} />
            <h5>{works.title}</h5>
            <p className="project-date">{works.date}</p>
            <div className="stack-box">
              {works.stack.map((stackItem, index) => (
                <div key={index} className="stack">
                  {stackItem}
                </div>
              ))}
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export const Projects = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  let projectsToShow = projects.project;
  if (currentCategory === "react") {
    projectsToShow = projects.react;
  } else if (currentCategory === "vue") {
    projectsToShow = projects.vue;
  }

  return (
    <Container className="pb-5">
      <div className="section-head">
        <h6 className="subtitle">Workbench</h6>
        <h4 className="title">My Project</h4>
      </div>
      <div className="btn-group d-flex justify-content-center">
        <button
          className={`btn-setting ${
            currentCategory === "all" ? "project-btn project-active" : ""
          }`}
          onClick={() => setCurrentCategory("all")}
        >
          All
        </button>
        <button
          className={`btn-setting ${
            currentCategory === "react" ? "project-btn project-active" : ""
          }`}
          onClick={() => setCurrentCategory("react")}
        >
          React
        </button>
        <button
          className={`btn-setting ${
            currentCategory === "vue" ? "project-btn project-active" : ""
          }`}
          onClick={() => setCurrentCategory("vue")}
        >
          Vue
        </button>
      </div>
      <Row>
        <ProjectDisplay
          projects={projectsToShow}
          handleShowModal={handleShowModal}
        />
      </Row>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="text-black px-0 mx-0"
      >
        <Modal.Header className="justify-content-end">
          <button
            className="btn-setting btn-close-modal"
            onClick={handleCloseModal}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={selectedProject?.img} className="img-modal" />
          <div className="project-content">
            <Modal.Title>{selectedProject?.title}</Modal.Title>
            <p className="project-date">{selectedProject?.date}</p>
            <div className="stack-box mb-3">
              {selectedProject?.stack.map((stackItem, index) => (
                <div key={index} className="stack">
                  {stackItem}
                </div>
              ))}
            </div>
            <p>{selectedProject?.desc}</p>
            <div className="modal-link-group">
              <a
                href={selectedProject?.link}
                className="btn-setting btn-modal-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-arrow-up-right-from-square pe-2"></i>
                Demo
              </a>
              <a
                href={selectedProject?.git}
                className="btn-setting btn-modal-git"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github pe-2"></i> Source
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
