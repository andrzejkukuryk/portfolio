import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";
import { useTranslation } from "react-i18next";
import styles from "./scrollDown.module.scss";

export function ScrollDown() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <a href="#contact" className={styles.anchor}>
        {t("home_hire")}
        <ArrowDown className={styles.arrow} />
      </a>
    </div>
  );
}
