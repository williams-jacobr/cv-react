import Card from "./UI/Card";
import styles from "./PersonalInfo.module.css";
import Section from "./UI/Section";

const PersonalInfo = function (props) {
  return (
    <Card className={`${styles["personal-info-container"]} ${props.className}`}>
      <Section title="Contact">
        <ul>
          <li>
            <a href="mailto:williams.jacobr@gmail.com">
              williams.jacobr@gmail.com
            </a>
          </li>
          <li>UA:+380635583568 UK:+447701020162</li>
        </ul>
      </Section>
      <Section title="Personal">
        <ul>
          <li>Kyiv, Ukraine</li>
          <li>6th May 1993</li>
          <li>Stoke-On-Trent, UK</li>
        </ul>
      </Section>
      <Section title="On the web">
        <ul>
          <li>jacob williams</li>
          <li>jacobwilliams33</li>
          <li>williams-jacobr</li>
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
          Masters degree in Mathematics. MMATH in Mathematics from University of
          Manchester.
        </p>
      </Section>
      <Section title="Former occupation">
        <p>
          👨‍🏫 English language teacher - teaching English as a foreign language
          (TEFL). 📲 Contact coordinator for a charity organisation.
        </p>
      </Section>
    </Card>
  );
};

export default PersonalInfo;
