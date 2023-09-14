import React from "react";
import { SectionName } from "../../models/menu";
import styles from "./menuItem.module.scss";

interface MenuItemProps {
  listItem: SectionName;
}
export function MenuItem({ listItem }: MenuItemProps) {
  const href = listItem.toLowerCase();

  return (
    <li className={styles.listItem}>
      <a href={`#${href}`}>{listItem}</a>
    </li>
  );
}
