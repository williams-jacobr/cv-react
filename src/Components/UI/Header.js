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

const Header = function (props) {
  return (
    <header className={styles.header}>
      <div>
        <h1>Jacob Williams</h1>
        <h2>Front-end Developer</h2>
      </div>
      <ul className={styles.contacts}>
        <li>
          <p>
            <BsGeo className={personalStyles.icon} />
            Kyiv
          </p>
        </li>
        <li>
          <div>
            <a href="mailto:williams.jacobr@gmail.com">
              <p>
                <BsEnvelope className={personalStyles.icon} />
                williams.jacobr@gmail.com
              </p>
            </a>
          </div>
        </li>
        <li>
          <div className={personalStyles["phone-container"]}>
            <BsTelephone className={personalStyles.icon} />
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
