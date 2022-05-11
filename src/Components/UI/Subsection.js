import styles from "./Subsection.module.css";

const Subsection = function (props) {
  const { title, to } = props;

  return (
    <div className={`${props.className} ${styles.subsection}`}>
      <a href={to} className={styles.link}>
        <h2>
          {title} <i className={`bi-arrow-up-right-square`}></i>
        </h2>{" "}
      </a>
      {props.children}
    </div>
  );
};

export default Subsection;
