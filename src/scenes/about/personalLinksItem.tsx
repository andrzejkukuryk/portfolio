import React from "react";
import styles from "./personalLinksItem.module.scss";
import { PersonalLinksInfo } from "../../data/personalLinks";
import { useTranslation } from "react-i18next";

interface PersonalLinksInfoProps {
  info: PersonalLinksInfo;
}
export function PersonalLinksItem({ info }: PersonalLinksInfoProps) {
  const { t } = useTranslation();
  return (
    <a href={info.url} target="_blank">
      <div className={styles.container}>
        <div className={styles.linkItem}>
          <info.icon className={styles.icon} />
        </div>
        <p className={styles.label}>{t(info.label)}</p>
      </div>
    </a>
  );
}
