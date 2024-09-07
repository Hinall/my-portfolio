import React from "react";
import styles from "./ButtonContainer.module.css";
import Button from "./Button";

function ButtonContainer() {
  return (
    <div className={styles.buttonContainer}>
      <Button />
    </div>
  );
}

export default ButtonContainer;
