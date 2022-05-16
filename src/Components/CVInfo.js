import Card from "./UI/Card";
import styles from "./CVInfo.module.css";
import Section from "./UI/Section";
import Subsection from "./UI/Subsection";

import { BsGithub, BsGraphUp } from "react-icons/bs";

const CVInfo = function (props) {
  return (
    <Card
      ref={null}
      className={`${styles["cv-info-container"]} ${props.className}`}
    >
      <Section title="◖Profile">
        <p>
          I am an enthusiastic self-taught student of front end development.
          <br />
          <br />
          During the course of 2021/22 I have finally seized the opportunity to
          do what I most loved when I was in college - code! I decided to take
          back the feeling I had throughout college and university - comfort and
          fulfilment from doing what I am great at. I cut back my hours as a
          teacher and dedicated my free time to courses on Javascript, CSS, and
          even some full-stack development to begin to understand how these
          languages fit into the bigger picture.
          <br />
          <br />I feel ready to and am enormously excited to get involved with a
          project or company. I am desperate to touch, to feel, to understand a
          real-world implementation of the skills which I have long wished I had
          been using ever since I left school.
        </p>
      </Section>
      <Section title="◖Experience">Hello</Section>
      <Section title="◖Projects">
        <Subsection
          title="Great Quotes"
          to="https://react-http-bf455.web.app/quotes"
          className={styles.subsection}
        >
          <p>TEXT</p>
          <div className="bullet-grid">
            <BsGithub />
            <a href="https://github.com/williams-jacobr/React-Course/tree/main/Router%20Project">
              github.com/williams-jacobr/React-Course/tree/main/RouterProject
            </a>
          </div>
        </Subsection>
        <Subsection
          title="Forkify"
          to="https://forkify-jacob-r-williams.netlify.app/"
          className={styles.subsection}
        >
          <p>
            This project was the culmination of the techniques I learned through
            an online Javascript course, making use of many techniques including
            asynchronous Javascript, ES6 classes, and implementation of MVC
            architecture. This project marked a real step up in my approach to
            project implementation - it opened my eyes to not just the processes
            needed to get a website up and running, but also to the hugh array
            of options available and possibilities to dive into.
          </p>
          <div className="bullet-grid">
            <BsGithub />
            <a href="https://github.com/williams-jacobr/forkify">
              github.com/williams-jacobr/forkify
            </a>
          </div>
        </Subsection>
        <Subsection
          title="uHost"
          to="https://williams-jacobr.github.io/uHost/"
          className={styles.subsection}
        >
          <p>
            This project helped me to expand on my CSS skills, in order to be
            able to break away from templates supplied by online tutorials. In
            this course I learned how to work with flexbox, CSS grid, and SASS,
            along with a whole range of more traditional CSS techniques, as well
            as reactive design by making use of media queries.
          </p>
          <div className="bullet-grid">
            <BsGithub />
            <a href="https://github.com/williams-jacobr/uHost">
              github.com/williams-jacobr/uHost
            </a>
          </div>
        </Subsection>
        <Subsection title="Personal Website" className={styles.subsection}>
          <p>
            This project showcases a number of techniques implemented in pure JS
            and CSS, including an independently designed MVC architecture which
            makes use of ES6 classes and asynchronous javascript. This project
            also taps into third party REST APIs.
          </p>
          <div className="bullet-grid">
            <BsGithub />
            <a href="https://github.com/williams-jacobr/jacob-williams-website">
              github.com/williams-jacobr/jacob-williams-website
            </a>
          </div>
        </Subsection>
      </Section>
      <Section title="◖Expanding my skills">
        <div className={`${styles.skills} bullet-grid`}>
          <BsGraphUp className={styles.graph} />
          <p>
            Becoming well acquainted with essential JS libraries, especially
            React and Redux.
          </p>
          <BsGraphUp className={styles.graph} />
          <p>
            Exploring further libraries that can push me to the next level,
            including Next.js
          </p>
          <BsGraphUp className={styles.graph} />
          <p>
            Working on real world projects with medium to large size user bases
          </p>
        </div>
      </Section>
    </Card>
  );
};

export default CVInfo;
