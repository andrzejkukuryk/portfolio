import React from "react";
import styles from "./stackList.module.css";
import { stack } from "../../data/stackIcons";
import { StackItem } from "./stackItem";

export function StackList() {
  const createList = () => {
    return stack.map((item) => <StackItem item={item} />);
  };
  return (
    <div className={styles.container}>
      <p className={styles.label}>My tech stack:</p>
      {createList()}
    </div>
  );
}
