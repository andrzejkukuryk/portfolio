import React from "react";
import styles from "./menu.module.css";
import { MenuItem } from "./menuItem";
import { sections } from "../../models/menu";

export function Menu() {
  const createList = () => {
    return sections.map((section) => <MenuItem listItem={section} />);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{createList()}</ul>
    </div>
  );
}
