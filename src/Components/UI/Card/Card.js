import {forwardRef} from "react";
import styles from "./Card.module.css";

const Card = forwardRef(({className, children}, ref) => {
  <div className={`${styles.card} ${className}`} ref={ref}>
    {children}
  </div>
});

export default Card;
