import React from "react";
import { sections } from "../../models/menu";
import { MenuItem } from "./menuItem";
import styles from "./menuList.module.scss";

export function MenuList() {
  return (
    <div>
      <ul className={styles.list}>
        {sections.map((section) => (
          <MenuItem listItem={section} key={section} />
        ))}
      </ul>
    </div>
  );
}
