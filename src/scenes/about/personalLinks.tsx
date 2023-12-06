import React from "react";
import { personalLinks } from "../../data/personalLinks";
import { PersonalLinksItem } from "./personalLinksItem";
import styles from "./personalLinks.module.scss";
import { useTranslation } from "react-i18next";

export function PersonalLinks() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3>{t("about_links")}:</h3>
      <div className={styles.linksContainer}>
        {personalLinks.map((link) => (
          <PersonalLinksItem info={link} key={`link_${link.label}`} />
        ))}
      </div>
    </div>
  );
}
