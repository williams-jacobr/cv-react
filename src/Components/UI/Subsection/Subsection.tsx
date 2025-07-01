import {ReactNode} from 'react';
import styles from './Subsection.module.css';
import {RiShareBoxLine} from 'react-icons/ri';
import {useParseClassname} from '../../../Hooks/ParseClassname';

const Subsection = function ({title, to, className, children}: {title: string; to?: string; className?: string; children: ReactNode}) {
  const classNames = useParseClassname(styles.subsection, className);

  return (
    <div className={classNames}>
      {!!to && (
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
