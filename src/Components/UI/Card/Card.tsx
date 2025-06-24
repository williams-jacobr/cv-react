import {ReactNode} from 'react';
import styles from './Card.module.css';

const Card = ({className, children}: {className?: string; children: ReactNode}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
