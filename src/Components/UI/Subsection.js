import styles from "./Subsection.module.css";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Subsection = function (props) {
  const { title, to } = props;

  return (
    <div className={`${props.className} ${styles.subsection}`}>
      <a href={to} className={styles.link}>
        <h2>{title}</h2> <BsArrowUpRightSquare className={styles.super} />
      </a>{" "}
      {props.children}
    </div>
  );
};

export default Subsection;
