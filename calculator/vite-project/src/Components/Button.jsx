import React from "react";
import styles from "./Button.module.css";

function Button() {
  let keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
    "clr",
    "=",
  ];
  return keys.map((names) => (
    <button className={styles.button}>{names}</button>
  ));
}

export default Button;
