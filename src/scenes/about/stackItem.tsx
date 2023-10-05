import React from "react";
import { StackInfo } from "../../data/stackIcons";
import styles from "./item.module.scss";

interface StackItemProps {
  item: StackInfo;
}

export function StackItem({ item }: StackItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <item.component className={styles.icon} />
      </div>
      <p className={styles.label}>{item.label}</p>
    </div>
  );
}
