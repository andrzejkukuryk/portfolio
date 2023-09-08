import React from "react";
import styles from "./item.module.scss";
import { PersonalLinksInfo } from "../../data/personalLinks";

interface PersonalLinksInfoProps {
  info: PersonalLinksInfo;
}
export function PersonalLinksItem({ info }: PersonalLinksInfoProps) {
  return (
    <a href={info.url} target="_blank" className={styles.a}>
      <div className={styles.container}>
        <div className={styles.circle}>
          <info.icon className={styles.icon} />
        </div>
        <p>{info.label}</p>
      </div>
    </a>
  );
}
