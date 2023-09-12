import React from "react";
import styles from "./stackList.module.scss";
import { stack } from "../../data/stackIcons";
import { StackItem } from "./stackItem";

export function StackList() {
  const createList = () => {
    return stack.map((item) => (
      <StackItem item={item} key={`stack${item.label}`} />
    ));
  };
  return (
    <div className={styles.container}>
      <h3>Technical stack:</h3>
      <div className={styles.listContainer}>{createList()}</div>
    </div>
  );
}
