import styles from "./App.module.css";
import Card from "./Components/UI/Card";
import CVInfo from "./Components/CVInfo";
import PersonalInfo from "./Components/PersonalInfo";
import { useEffect, useRef } from "react";

function App() {
  const appContainer = useRef(null);

  return (
    <Card className={styles.main}>
      <div className={styles.container} ref={appContainer}>
        <CVInfo className={styles.section} />
        <PersonalInfo
          className={styles.section}
          printContainer={appContainer}
        />
      </div>
    </Card>
  );
}

export default App;
