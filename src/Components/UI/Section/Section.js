import styles from "./Section.module.css";

const Section = function ({title, className, children}) {
  return (
    <div className={`${className} ${styles.section}`}>
      {title ? <h2>{title}</h2> : ""}
      {children}
    </div>
  );
};

export default Section;
