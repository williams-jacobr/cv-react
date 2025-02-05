import styles from "./Header.module.css";
import personalStyles from "../PersonalInfo.module.css";
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTelephone,
  BsGeo,
} from "react-icons/bs";

const Header = function () {
  return (
    <header className={styles.header}>
      <div>
        <a href="https://jacob-williams-cv.netlify.app/">
          <h1>Jacob Williams</h1>
        </a>
        <h2>Front-end Developer</h2>
      </div>
      <ul className={styles.contacts}>
        <li>
          <p>
            <BsGeo className={styles.icon} />
            Kyiv
          </p>
        </li>
        <li>
          <a href="mailto:williams.jacobr@gmail.com">
            <div className={personalStyles["container"]}>
              <BsEnvelope className={styles.icon} />
              <p>williams.jacobr@gmail.com</p>
            </div>
          </a>
        </li>
        <li>
          <div className={personalStyles["container"]}>
            <BsTelephone className={styles.icon} />
            <div className={personalStyles["phone-numbers"]}>
              <p>UA:+380635583568</p>
              <p>UK:+447701020162</p>
            </div>
          </div>
        </li>
      </ul>
      <ul className={styles["social-media"]}>
        <li>
          <a href="https://www.facebook.com/jacob.williams.33">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacobwilliams33/">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/williams-jacobr">
            <BsGithub />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
