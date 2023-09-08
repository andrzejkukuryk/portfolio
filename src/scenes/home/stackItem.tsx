import React from "react";
import { StackInfo } from "../../data/stackIcons";
import styles from "./item.module.scss";

interface StackItemProps {
  item: StackInfo;
}

export function StackItem({ item }: StackItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <item.component className={styles.icon} />
      </div>
      <p>{item.label}</p>
    </div>
  );
}
