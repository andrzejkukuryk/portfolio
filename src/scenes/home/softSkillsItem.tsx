import React from "react";
import styles from "./softSkillsItem.module.scss";

interface SoftSkillsItemProps {
  label: string;
}

export function SoftSkillsItem({ label }: SoftSkillsItemProps) {
  return (
    <div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
