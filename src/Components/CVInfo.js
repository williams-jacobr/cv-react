import Card from "./UI/Card";
import styles from "./CVInfo.module.css";
import Section from "./UI/Section";
import Subsection from "./UI/Subsection";

import { BsGithub } from "react-icons/bs";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { SiReact, SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

import ExpandingMySkills from "./ExpandingMySkills";

const CVInfo = function (props) {
  return (
    <Card
      ref={null}
      className={`${styles["cv-info-container"]} ${props.className}`}
    >
      <Section className={styles.profile}>
        <p>
          A driven and ambituous mathematician with a keen interest in
          programming seeking to apply for a Junior Frontend Developer position
          in an exciting company. Since getting my first taste of programming
          through HTML and Visual Basic at college, through to the use of MatLab
          and R at university, and onward to my current fascination in front-end
          development, I have been intrigued by the draw of programming for 12+
          years.
          <br />
          <br />
          Having cut back my hours as a self-made freelance EFL teacher to
          dedicate 100s of hours to Udemy courses on Javascript, React, CSS, and
          even some full-stack development, I am ready to make the difference at
          your company by implementing my willpower and determination to achieve. As a
          very capable mathematician and problem solver, with real, tangible,
          front-end development skills, I am looking forward to discussing
          routes forward to benefit both parties.
        </p>
      </Section>

      <Section title="◖Education">
        <div className={styles["side-by-side"]}>
          <div className={styles.education}>
            <h1>MMATH Masters in Mathematics</h1>
            <h2>First Class Degree</h2>
          </div>
          <div className={styles.education}>
            <h3>
              <a href="https://www.maths.manchester.ac.uk/">
                University of Manchester
              </a>
            </h3>

            <h4>September 2011 - August 2015</h4>
            <h5>Manchester, UK</h5>
          </div>

          <Section title="◖Certificates">
            <div className={styles.certificates}>
              <a
                className={styles.link}
                href="https://www.udemy.com/certificate/UC-cf587098-c2d0-4d21-b521-6b7ed4e3242f/"
              >
                <h1>Javascript</h1>
                <RiShareBoxLine className={styles.super} />
              </a>
              <h2>The Complete Javascript Course</h2>

              <a
                className={styles.link}
                href="https://www.udemy.com/certificate/UC-08e7f12a-7901-47c3-96b3-dfd33ecea29f/"
              >
                <h1>Cascading Style Sheets (CSS)</h1>
                <RiShareBoxLine className={styles.super} />
              </a>
              <h2>CSS - The Complete Guide</h2>

              <a
                className={styles.link}
                href="https://www.udemy.com/certificate/UC-d5e5e29d-8eba-43a3-b66b-edf6001589e5/"
              >
                <h1>MEAN Stack</h1>
                <RiShareBoxLine className={styles.super} />
              </a>
              <h2>Angular & NodeJS - The MEAN Stack Guide</h2>
            </div>
          </Section>
          <Section title="◖Skills" className={styles.skills}>
            <ul>
              <li>
                <SiJavascript className={`${styles.js} ${styles.icon}`} />
              </li>
              <li>
                <SiReact className={`${styles.react} ${styles.icon}`} />
              </li>
              <li>
                <FaGitAlt />
              </li>
              <li>
                <IoLogoCss3 className={`${styles.css} ${styles.icon}`} />
              </li>
              <li>
                <IoLogoHtml5 className={`${styles.html} ${styles.icon}`} />
              </li>
            </ul>
          </Section>
        </div>
      </Section>

      <Section title="◖Projects" className="page-break">
        <Subsection
          title="Great Quotes"
          to="https://react-http-bf455.web.app/quotes"
          className={styles.subsection}
        >
          <p>
            A project that demonstrates use of all the basic React concepts,
            including custom hooks and React Router. The simple application
            makes use of reusable components, props, and conditional rendering.
            This project marks a noticeable shift in my front-end development
            code by creating an application that is much easier to maintain,
            manage, and expand.
          </p>
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
      <ExpandingMySkills
        title="◖Expanding my skills"
        className={styles["expanding-skills"]}
      />
    </Card>
  );
};

export default CVInfo;
