import styles from "./Subsection.module.css";
import { RiShareBoxLine } from "react-icons/ri";

const Subsection = function ({title, to, className, children}) {
  return (
    <div className={`${className} ${styles.subsection}`}>
      {to && (
        <a href={to} className={styles.link}>
          <h2>{title}</h2> <RiShareBoxLine className={styles.super} />
        </a>
      )}
      {!to && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Subsection;
