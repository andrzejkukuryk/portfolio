import React from "react";
import photo from "../../graph/foto400px.jpg";
import styles from "./photo.module.css";

export function Photo() {
  return (
    <div>
      <img src={photo} alt="Andrzej Kukuryk photo" className={styles.circle} />
    </div>
  );
}
