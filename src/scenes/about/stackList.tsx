import React from "react";
import styles from "./stackList.module.scss";
import { StackCarousel } from "./stackCarousel";
import { useTranslation } from "react-i18next";

export function StackList() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3>{t("about_stack")}:</h3>
      <StackCarousel />
    </div>
  );
}
