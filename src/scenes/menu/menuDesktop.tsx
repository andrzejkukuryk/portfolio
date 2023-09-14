import React from "react";
import styles from "./menuDesktop.module.scss";
import { MenuList } from "./menuList";

export function MenuDesktop() {
  return (
    <div className={styles.container}>
      <MenuList />
    </div>
  );
}
