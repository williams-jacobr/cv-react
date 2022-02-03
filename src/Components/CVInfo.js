import Card from "./UI/Card";
import styles from "./CVInfo.module.css";
import Section from "./UI/Section";

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
          During the course of 2021 I have finally seized the opportunity to do
          what I most loved when I was in college - code! I decided to take back
          the feeling I had throughout college and university - comfort and
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
        <Section title="Personal Website" className={styles.subsection}>
          <p>
            My first project away from any course or access to help and
            direction. My aim here is to build a space where people can learn
            about me, my interests, and keep up-to-date on the things which I am
            working on. This project showcases a number of techniques in JS and
            CSS, including an independently designed MVC architecture which
            makes use of ES6 classes and asynchronous javascript. This project
            also taps into external APIs, including the github REST API and the
            Leaflet library.
            <br />
            <br />
            <br />
            {`Visit: `}
            <a href="https://jacob-williams.netlify.app/">
              jacob-williams.netlify.app/
            </a>
            <br />
            <br />
            {`GitHub: `}
            <a href="https://github.com/williams-jacobr/jacob-williams-website">
              github.com/williams-jacobr/jacob-williams-website
            </a>
          </p>
        </Section>
        <Section title="uHost" className={styles.subsection}>
          <p>
            This project was the culmination of the techniques I learned through
            an online Javascript course on udemy.com.
            <br />
            <br />
            An application for users to search for recipes by keyword, modify
            the recipe ratios to their desired serving, create their own recipes
            (which are then pushed onto the external library), and bookmark
            favourites to be able to access them later. In this project I make
            use of many techniques including asynchronous Javascript, ES6
            classes, and implementation of MVC architecture.
            <br />
            <br />
            This project marked a real step up in my approach to project
            implementation. Whether it be through a full analysis of which parts
            of the application are part of the model, the view, or the
            controller, or through making use of npm and external libraries,
            including bundlers, polyfillers, etc, the project pushed me to learn
            a range of skills. These skills opened my eyes to not just the
            processes needed to get a website up and running, but also to the
            hugh array of options available and possibilities to dive into.
            <br />
            <br />
            <br />
            {`Visit: `}
            <a href="https://williams-jacobr.github.io/uHost/">
              williams-jacobr.github.io/uHost/
            </a>
            <br />
            <br />
            {`GitHub: `}
            <a href="https://github.com/williams-jacobr/forkify">
              github.com/williams-jacobr/forkify
            </a>
          </p>
        </Section>
        <Section title="forkify" className={styles.subsection}>
          <p>
            This project helped me to expand on my CSS skills, in order to be
            able to break away from templates supplied by online tutorials. In
            this course I learned how to work with flexbox, CSS grid, and SASS,
            along with a whole range of more traditional CSS techniques, as well
            as reactive design by making use of media queries.
            <br />
            <br />
            The application itself is a template of a server hosting service
            website. The design is very minimal and easy to navigate,
            demonstrating the use of transitions and animations to please the
            users eye and push the user towards CTAs.
            <br />
            <br />
            <br />
            {`Visit: `}
            <a href="https://forkify-jacob-r-williams.netlify.app/">
              forkify-jacob-r-williams.netlify.app/
            </a>
            <br />
            <br />
            {`GitHub: `}
            <a href="https://github.com/williams-jacobr/uHost">
              github.com/williams-jacobr/uHost
            </a>
          </p>
        </Section>
      </Section>
      <Section title="◖Expanding my skills">
        <ul>
          <li>
            📈 Turning my attention to commonly used JS libraries, especially
            React, and associated frameworks, such as React Native.
          </li>
          <li>📈 Working on real world style projects</li>
        </ul>
      </Section>
    </Card>
  );
};

export default CVInfo;
