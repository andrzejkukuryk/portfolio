import React from "react";
import styles from "./menu.module.scss";
import { Title } from "./title";
import { MenuDesktop } from "./menuDesktop";

export function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Title />
        <MenuDesktop />
      </div>
    </div>
  );
}
