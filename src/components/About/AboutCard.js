import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Heya, I am <span className="purple">Pravin Chaudhari </span>
            from <span className="purple"> Nashik, India.</span>
            <br /> An Aspiring Engineer student at Pune Vidyarthi Griha's College of Engineering, currently studying in my final year. I am an Indian by nationality. I have worked upon alot of Projects or engaged little bit with few startups or organizations to learn techcalities of how mechanisms behind this industry works. While I am pursuing a technical degree, I also love to muse with work related to writings or paitings. I love building things. Hard engineering problems are often intrisically fun to tackle, I'm most attracted to solving real customer problems with a business justification. I wish to be a Front-end web design and development, making pixel magic in photoshop and turning it into semantic HTML & CSS.
            <br />
            <br>
            </br>
            <strong> My interests,</strong>however, extend beyond the web and I love helping people with designing and development strategy. I even engage with few people of opposite views to be in a healthy debate.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TedTalks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The expert in anything was once a beginner!"{" "}
          </p>
          <footer className="blockquote-footer">Pravin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
