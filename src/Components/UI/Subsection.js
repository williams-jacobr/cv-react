import styles from "./Subsection.module.css";
import { RiShareBoxLine } from "react-icons/ri";

const Subsection = function (props) {
  const { title, to } = props;

  return (
    <div className={`${props.className} ${styles.subsection}`}>
      {to && (
        <a href={to} className={styles.link}>
          <h2>{title}</h2> <RiShareBoxLine className={styles.super} />
        </a>
      )}
      {!to && <h2>{title}</h2>}
      {props.children}
    </div>
  );
};

export default Subsection;
