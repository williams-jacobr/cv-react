import React from "react";
import styles from "./Card.module.css";

const Card = React.forwardRef((props, ref) => {
  const classes = `${styles.card} ${props.className}`;

  if (ref) {
    return (
      <div className={classes} ref={ref}>
        {props.children}
      </div>
    );
  }

  if (!ref) {
    return <div className={classes}>{props.children}</div>;
  }
});

export default Card;
