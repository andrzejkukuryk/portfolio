import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./contactInfo.module.scss";

export function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
        <h3>{t("contact_phone")}:</h3>
        <p>
          <a href="tel:+48888908481">+48 888 908 481</a>
        </p>
      </div>
      <div className={styles.infoDiv}>
        <h3>Email:</h3>
        <p>
          <a href="mailto:andrzejkukuryk@gmail.com" target="_blank">
            andrzejkukuryk@gmail.com
          </a>
        </p>
      </div>
      <div className={styles.infoDiv}>
        <h3>{t("contact_location")}:</h3>
        <p>{t("contact_city")}</p>
      </div>
    </div>
  );
}
