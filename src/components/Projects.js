import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img2.jpg";
import projImg6 from "../assets/img/project-img1.jpg";
import projImg1 from "../assets/img/project-img5.jpg";
import projImg2 from "../assets/img/project-img6.jpg";
import projImg3 from "../assets/img/project-img3.jpg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Hospital Management System",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Event Management System",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Nature Landing Page",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Full stack CRUD Operation",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Temperature Management System",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "DRUM Kit Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Education</h2>
                <p> Throughout my academic journey, I have actively engaged in various projects that showcase my technical skills and passion for learning. Each project has helped me gain practical experience, build problem-solving skills, and develop a deeper understanding of industry-relevant technologies. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
  <div className="d-flex flex-wrap justify-content-around">
    {/* Card for B.Tech */}
    <div className="card mb-4" style={{
        width: '18rem',
        backgroundColor: '#e0f7fa',
        color: '#004d40',
        borderRadius: '10px',
        transition: 'transform 0.4s, box-shadow 0.4s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#000', fontWeight: 'bold', fontSize: '1.3rem' }}>Bachelor of Technology (B.Tech)</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '1rem' }}>Dr. Ambedkar Technology University, Lonere</h6>
        <p className="card-text" style={{ fontSize: '0.9rem' }}>
        Major: Electronics & Telecommunication Eng.<br />
          Year of Completion: 2024<br />
          CGPA: 8.01
        </p>
      </div>
    </div>

    {/* Card for Diploma */}
    <div className="card mb-4" style={{
        width: '18rem',
        backgroundColor: '#ffecb3',
        color: '#795548',
        borderRadius: '10px',
        transition: 'transform 0.4s, box-shadow 0.4s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#000', fontWeight: 'bold', fontSize: '1.3rem' }}>Diploma</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '1rem' }}>Sveri's College of Engineering, Pandharpur</h6>
        <p className="card-text" style={{ fontSize: '0.9rem' }}>
          Major: Computer Engineering<br />
          Year of Completion: 2021<br />
          Percentage: 85.05%
        </p>
      </div>
    </div>

    {/* Card for SSC */}
    <div className="card mb-4" style={{
        width: '18rem',
        backgroundColor: '#ffe0e0',
        color: '#b71c1c',
        borderRadius: '10px',
        transition: 'transform 0.4s, box-shadow 0.4s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#000', fontWeight: 'bold', fontSize: '1.3rem' }}>Secondary School Certificate (SSC)</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '1rem' }}>Shree Sitaram Maharaj Vidhyalay Khardi</h6>
        <p className="card-text" style={{ fontSize: '0.9rem' }}>
          Year of Completion: 2018<br />
          Percentage: 78.40%
        </p>
      </div>
    </div>
  </div>
</Tab.Pane>


                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
