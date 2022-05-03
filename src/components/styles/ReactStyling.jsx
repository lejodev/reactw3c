import React from "react";
import styles from "../../styles/styles.module.css"

const ReactStyling = () => {
  return (
    <>
      <div className={styles.gray} >This div has a gray background color</div>
      <div className={styles.red}>This div has a red background color</div>
      <div className={styles.green}>This div has a green background color</div>
    </>
  );
};

export default ReactStyling;
