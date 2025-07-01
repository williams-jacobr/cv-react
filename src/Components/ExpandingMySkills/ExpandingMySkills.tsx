import styles from './ExpandingMySkills.module.css';
import Section from '../UI/Section/Section';
import {useParseClassname} from '../../Hooks/ParseClassname';
import {BsGraphUp} from 'react-icons/bs';

const ExpandingMySkills = function ({title, className}: {title?: string; className?: string}) {
  const classNames = useParseClassname(styles.skills, className);

  return (
    <Section title={title} className={classNames}>
      <div className="bullet-grid">
        <BsGraphUp className={styles.graph} />
        <p>
          Exploring and expanding knowledge in React and Redux, Next.js,
          Node.js, Express.js, etc.
        </p>
        <BsGraphUp className={styles.graph} />
        <p>Diving into database management - PostgreSQL, noSQL, mongoDB etc.</p>
        <BsGraphUp className={styles.graph} />
        <p>Compining the above to expand into full-stack development</p>
      </div>
    </Section>
  );
};

export default ExpandingMySkills;
