import styles from "./App.module.css";
import Card from "./Components/UI/Card";
import CVInfo from "./Components/CVInfo";
import PersonalInfo from "./Components/PersonalInfo";
import { useEffect, useRef } from "react";
import Header from "./Components/UI/Header";

function App() {
  const appContainer = useRef(null);

  return (
    <Card className={styles.main}>
      <div className={styles.container} ref={appContainer}>
        <div>
          <Header />
          <CVInfo className={styles.section} />
        </div>
        <PersonalInfo
          className={styles.section}
          printContainer={appContainer}
        />
      </div>
    </Card>
  );
}

export default App;
