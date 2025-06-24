import styles from './App.module.css';
import Card from './Components/UI/Card/Card';
import CVInfo from './Components/CVInfo/CVInfo';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import {useRef} from 'react';
import Header from './Components/UI/Header/Header';
import {useReactToPrint} from 'react-to-print';

function App() {
  const appContainer = useRef(null);
  const onPrint = useReactToPrint({contentRef: appContainer});

  return (
    <Card className={styles.main}>
      <div className={styles.container} ref={appContainer}>
        <div>
          <Header />
          <CVInfo className={styles.section} />
        </div>
        <PersonalInfo className={styles.section} onPrint={onPrint} />
      </div>
    </Card>
  );
}

export default App;
