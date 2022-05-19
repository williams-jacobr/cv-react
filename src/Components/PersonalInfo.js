import Card from "./UI/Card";
import styles from "./PersonalInfo.module.css";
import Section from "./UI/Section";
import ExpandingMySkills from "./ExpandingMySkills";

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
      <Section className={styles.personal}>
        <ul>
          <li>
            <BsGeo className={styles.icon} />
            {`Kyiv, Ukraine`}
          </li>
          <li>
            <BsCalendar className={styles.icon} />
            {`6th May 1993`}
          </li>
          <li>
            <BsHouse className={styles.icon} />
            {`Stoke-On-Trent, UK`}
          </li>
        </ul>
      </Section>
      <Section title="Contact me" className={styles['contact-me']}>
        <ul>
          <li>
            <div className={styles.email}>
              <a href="mailto:williams.jacobr@gmail.com">
                <BsEnvelope className={styles.icon} />
                <p>williams.jacobr@gmail.com</p>
              </a>
            </div>
          </li>

          <li>
            <div className={styles["phone-container"]}>
              <BsTelephone className={styles.icon} />
              <div className={styles["phone-numbers"]}>
                <p>UA:+380635583568</p>
                <p>UK:+447701020162</p>
              </div>
            </div>
          </li>
        </ul>
      </Section>

      <Section title="On the web" className={styles.profiles}>
        <ul>
          <li>
            <a href="https://www.facebook.com/jacob.williams.33">
              <BsFacebook className={styles.icon} />
              {`jacob williams`}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jacobwilliams33/">
              {" "}
              <BsLinkedin className={styles.icon} />
              {`jacobwilliams33`}
            </a>
          </li>
          <li>
            <a href="https://github.com/williams-jacobr">
              <BsGithub className={styles.icon} />
              {`williams-jacobr`}
            </a>
          </li>
        </ul>
      </Section>
      <ExpandingMySkills
        title="Expanding my skills"
        className={styles["expanding-skills"]}
      />
      <Section
        title="Former occupation"
        className={styles["former-occupation"]}
      >
        <div className="bullet-grid">
          <p>👨‍🏫</p>
          <div>
            <p>
              <b>English language teacher</b>
            </p>
            <ul>
              <li>freelance tutor for Ukrainian professionals</li>
              <li>classroom teacher at multiple sites in Kyiv</li>
              <li>mentor for Polish professionals</li>
            </ul>
          </div>
          <p>📲</p>
          <p>
            <b>Contact coordinator</b> for a charity organisation.
          </p>
        </div>
      </Section>
      <div className={styles["printer-button"]}>
        <button ref={printButton} onClick={printButtonClickHandler}>
          Save
        </button>
      </div>
    </Card>
  );
};

export default PersonalInfo;
