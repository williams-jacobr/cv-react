import Card from "./UI/Card";
import styles from "./PersonalInfo.module.css";
import Section from "./UI/Section";

import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import profilePic from "../img/profile.jpg";
import { useRef } from "react";

const PersonalInfo = function (props) {
  const printButton = useRef(null);

  const printButtonClickHandler = async function () {
    const node = props.printContainer.current;

    const img = await domtoimage.toBlob(node, {
      filter: (node) => node !== printButton.current || node.tagName !== "i",
    });

    window.saveAs(img, "Jacob_Williams_CV.png");
  };

  return (
    <Card
      ref={null}
      className={`${styles["personal-info-container"]} ${props.className}`}
    >
      <img
        className={styles["profile-image"]}
        src={profilePic}
        alt="jacob williams profile"
      />
      <Section title="Contact">
        <ul>
          <li>
            <a href="mailto:williams.jacobr@gmail.com">
              <i className="bi-envelope" />
              {` williams.jacobr@gmail.com`}
            </a>
          </li>
          <i className="bi-telephone" />
          <li>UA:+380635583568 UK:+447701020162</li>
        </ul>
      </Section>
      <Section title="Personal">
        <ul>
          <li>
            <i className="bi-geo" />
            {` Kyiv, Ukraine`}
          </li>
          <li>
            <i className="bi-calendar" />
            {` 6th May 1993`}
          </li>
          <li>
            <i className="bi-house" />
            {` Stoke-On-Trent, UK`}
          </li>
        </ul>
      </Section>
      <Section title="On the web">
        <ul>
          <li>
            <a href="https://www.facebook.com/jacob.williams.33">
              <i className="bi-facebook" />
              {` jacob williams`}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jacobwilliams33/">
              {" "}
              <i className="bi-linkedin" />
              {` jacobwilliams33`}
            </a>
          </li>
          <li>
            <a href="https://github.com/williams-jacobr">
              <i className="bi-github" />
              {` williams-jacobr`}
            </a>
          </li>
        </ul>
      </Section>
      <Section title="Skills">
        <ul>
          <li>Javascript </li>
          <li>React.Js</li>
          <li>CSS/SCSS</li>
          <li>HTML5</li>
        </ul>
      </Section>
      <Section title="Education">
        <p>
          🎓 MMATH Masters degree in Mathematics from University of Manchester.
        </p>
      </Section>
      <Section title="Former occupation">
        <p>
          👨‍🏫 English language teacher - teaching English as a foreign language
          (TEFL). <br />
          📲 Contact coordinator for a charity organisation.
        </p>
      </Section>
      <div>
        <button ref={printButton} onClick={printButtonClickHandler}>
          Print
        </button>
      </div>
    </Card>
  );
};

export default PersonalInfo;
