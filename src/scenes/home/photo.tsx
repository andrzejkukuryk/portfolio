import React from "react";
import photo from "../../graph/foto400px.jpg";
import styles from "./photo.module.scss";
import { SoftSkillsList } from "./softSkillsList";

export function Photo() {
  return (
    <div className={styles.container}>
      <img src={photo} alt="Andrzej Kukuryk photo" className={styles.circle} />
      <SoftSkillsList />
    </div>
  );
}
