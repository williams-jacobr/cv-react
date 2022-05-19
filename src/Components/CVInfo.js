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
      <Section>
        <p>
          A driven and ambituous mathematician with a keen interest in
          programming seeking to apply for a front-end developer position in an
          exciting company. Since getting my first taste of programming through
          HTML and Visual Basic at college, through to the use of MatLab and R
          at university, and onward to my current fascination in front-end
          development, I have been intrigued by the draw of programming for 12+
          years.
          <br />
          <br />
          Having cut back my hours as a self-made freelance EFL teacher to
          dedicate 100s of hours to Udemy courses on Javascript, React, CSS, and
          even some full-stack development, I am ready to make the difference at
          your company by implementing my willpower and determination to
          achieve. As a very capable mathematician and problem solver, with
          real, tangible, front-end development skills, I am looking forward to
          working with your company.
        </p>
      </Section>
      <Section title="◖Education">
        <div className={styles.education}>
          <h1>MMATH Masters in Mathematics</h1>
          <h2>First Class Degree</h2>

          <h3>
            <a href="https://www.maths.manchester.ac.uk/">
              University of Manchester
            </a>
          </h3>

          <h4>September 2011 - August 2015</h4>
          <h5>Manchester, UK</h5>
        </div>
      </Section>
      <Section title="◖Projects">
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
      <Section title="◖Expanding my skills" className={styles.skills}>
        <div className="bullet-grid">
          <BsGraphUp className={styles.graph} />
          <p>
            Becoming well acquainted with essential JS libraries, especially
            React and Redux.
          </p>
          <BsGraphUp className={styles.graph} />
          <p>
            Working on real world projects with medium to large size user bases
          </p>
          <BsGraphUp className={styles.graph} />
          <p>
            Exploring further libraries that can push me to the next level,
            including Next.js and Node.js
          </p>
          <BsGraphUp className={styles.graph} />
          <p>Familiarising myself with JS frameworks such as Angular or Vue</p>
          <BsGraphUp className={styles.graph} />
          <p>Familiarising myself with Node frameworks such as Express.js</p>
          <BsGraphUp className={styles.graph} />
          <p>
            Becoming better acquainted with database management such as a deeper
            dive into PostgreSQL or equivalents
          </p>
          <BsGraphUp className={styles.graph} />
          <p>Compining the above to expand into full-stack development</p>
        </div>
      </Section>
    </Card>
  );
};

export default CVInfo;
