import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spiffy Shoes"
              description="Discover a world of unparalleled elegance and unmatched comfort at Spiffy Shoes, your ultimate destination for online shoe shopping. Immerse yourself in a curated collection of the latest trends, timeless classics, and innovative designs that redefine footwear fashion."
              ghLink="https://github.com/Panya-2002/Spiffy-shoe"
              demoLink="https://master--starlit-croissant-263ea8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ShopLane"
              description="Certainly! An E-commerce website is an online platform where businesses sell products or services to consumers over the internet. Here's a detailed description of what an E-commerce website typically offers: Welcome to Shoplane – Your Ultimate Online Shopping Destination! At Shoplane, we redefine the way you shop online.."
              ghLink="https://github.com/Panya-2002/Shoplane-E-Commerce-Website"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code-Byte-Forge"
              description="Introducing our innovative website, a platform designed exclusively for passionate writers and bloggers! Our project provides a user-friendly space where individuals can effortlessly craft and publish their own blogs and posts. With intuitive tools and a seamless interface, expressing your thoughts, ideas, and stories has never been this convenient"
              ghLink="https://github.com/Panya-2002/Code-Byte-Forge-main"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restaurant-Seat-Swift"
              description="n the vibrant world of gastronomy, where culinary delights await at every corner, we understand the importance of a seamless dining experience. With our Restaurant Seat Booking Application, we've redefined how you enjoy your favorite meals. No more waiting in long queues or endless phone calls - your table is just a click away!."
              ghLink="https://github.com/Panya-2002/Restaurant-seat-swift-app"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Code-Canvas"
              description="Certainly! CodeCanvas is envisioned as a versatile and intuitive code editor designed to provide developers with a seamless coding experience."
              ghLink="https://github.com/Panya-2002/Code-Canvas-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face-Sense-Emotion-Tracker"
              description="Certainly! Expanding on the topic, you could say: Humans have long been accustomed to the nuances of non-verbal communication. The unspoken language of emotions significantly amplifies the lucidity of our thoughts and concepts. What makes this concept truly captivating is the ability of computers to decode these intricate human emotions."
              ghLink="https://github.com/Panya-2002/FaceSense--Emotion-Tracker-main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
