import React from "react";
import styles from "./item.module.scss";
import { PersonalLinksInfo } from "../../data/personalLinks";

interface PersonalLinksInfoProps {
  info: PersonalLinksInfo;
}
export function PersonalLinksItem({ info }: PersonalLinksInfoProps) {
  return (
    <a href={info.url} target="_blank">
      <div className={styles.container}>
        <div className={styles.item}>
          <info.icon className={styles.icon} />
        </div>
        <p className={styles.label}>{info.label}</p>
      </div>
    </a>
  );
}
