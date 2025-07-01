import {ReactNode} from 'react';
import styles from './Card.module.css';
import {useParseClassname} from '../../../Hooks/ParseClassname';

const Card = ({className, children}: {className?: string; children: ReactNode}) => {
  const classNames = useParseClassname(styles.card, className);

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default Card;
