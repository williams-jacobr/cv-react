import styles from "./App.module.css";
import Card from "./Components/UI/Card";
import CVInfo from "./Components/CVInfo";
import PersonalInfo from "./Components/PersonalInfo";

function App() {
  return (
    <Card className={styles.main}>
      <CVInfo className={styles.section} />
      <PersonalInfo className={styles.section} />
    </Card>
  );
}

export default App;
