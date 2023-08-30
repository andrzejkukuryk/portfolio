import React from "react";
import styles from "./menu.module.css";
import { MenuItem } from "./menuItem";
import { sections } from "../../../models/menu";

export function Menu() {
  return (
    <div className={styles.container}>
      <ul>
        {sections.map((section) => {
          return <MenuItem listItem={section} />;
        })}
      </ul>
    </div>
  );
}
