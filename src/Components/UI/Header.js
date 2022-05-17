import styles from "./Header.module.css";

const Header = function (props) {
  return (
    <header className={styles.header}>
      <h1>Jacob Williams</h1>
      <h2>Front-end Developer</h2>
    </header>
  );
};

export default Header;
