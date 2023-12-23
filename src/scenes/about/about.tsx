import React from "react";
import styles from "./about.module.scss";
import { useNavContext } from "../../data/navProvider";
import { usePosition } from "../../hooks/usePosition";
import { PersonalLinks } from "./personalLinks";
import { StackList } from "./stackList";
import { useTranslation } from "react-i18next";

export function About() {
  const { updateAboutPosition } = useNavContext();
  const { ref } = usePosition(updateAboutPosition);
  const { t } = useTranslation();

  return (
    <section ref={ref} id="about" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{t("about_about")}</h2>
        <p className={styles.story}>{t("about_story")}</p>
        <StackList />
        <PersonalLinks />
      </div>
    </section>
  );
}
