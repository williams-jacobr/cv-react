import {ReactNode} from 'react';
import styles from './Section.module.css';
import {useParseClassname} from '../../../Hooks/ParseClassname';

const Section = function ({title, className, flexBase, children}: {title?: string; className?: string; flexBase?: 33 | 50 | 66, children: ReactNode}) {
  const classNames = useParseClassname(styles.section, styles[`section-flex-base-${flexBase}`], className);

  return (
    <div className={classNames}>
      {!!title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
