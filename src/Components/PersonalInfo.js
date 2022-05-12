import Card from "./UI/Card";
import styles from "./PersonalInfo.module.css";
import Section from "./UI/Section";

import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

import profilePic from "../img/profile.jpg";
import { useRef } from "react";

import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsGeo,
  BsCalendar,
  BsHouse,
  BsTelephone,
  BsEnvelope,
} from "react-icons/bs";

import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";

import { SiReact, SiJavascript } from "react-icons/si";

const PersonalInfo = function (props) {
  const printButton = useRef(null);

  const printButtonClickHandler = async function () {
    const node = props.printContainer.current;

    const img = await domtoimage.toBlob(node, {
      filter: (node) => node !== printButton.current,
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
              <BsEnvelope />
              {` williams.jacobr@gmail.com`}
            </a>
          </li>
          <BsTelephone />
          <li>UA:+380635583568 UK:+447701020162</li>
        </ul>
      </Section>
      <Section title="Personal">
        <ul>
          <li>
            <BsGeo />
            {` Kyiv, Ukraine`}
          </li>
          <li>
            <BsCalendar />
            {` 6th May 1993`}
          </li>
          <li>
            <BsHouse />
            {` Stoke-On-Trent, UK`}
          </li>
        </ul>
      </Section>
      <Section title="On the web">
        <ul>
          <li>
            <a href="https://www.facebook.com/jacob.williams.33">
              <BsFacebook />
              {` jacob williams`}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jacobwilliams33/">
              {" "}
              <BsLinkedin />
              {` jacobwilliams33`}
            </a>
          </li>
          <li>
            <a href="https://github.com/williams-jacobr">
              <BsGithub />
              {` williams-jacobr`}
            </a>
          </li>
        </ul>
      </Section>
      <Section title="Skills">
        <ul>
          <li>
            <SiJavascript className={styles.js} /> Javascript{" "}
          </li>
          <li>
            <SiReact className={styles.react} /> React.Js
          </li>
          <li>
            <IoLogoCss3 className={styles.css} /> CSS/SCSS
          </li>
          <li>
            <IoLogoHtml5 className={styles.html} /> HTML5
          </li>
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
        <button
          className={styles["printer-button"]}
          ref={printButton}
          onClick={printButtonClickHandler}
        >
          Print
        </button>
      </div>
    </Card>
  );
};

export default PersonalInfo;
