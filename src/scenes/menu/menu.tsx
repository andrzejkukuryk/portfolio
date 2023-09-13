import React from "react";
import styles from "./menu.module.scss";
import { MenuItem } from "./menuItem";
import { sections } from "../../models/menu";

export function Menu() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {sections.map((section) => (
          <MenuItem listItem={section} key={section} />
        ))}
      </ul>
    </div>
  );
}
