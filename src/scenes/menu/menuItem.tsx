import React from "react";
import { SectionName } from "../../models/menu";
import styles from "./menuItem.module.scss";
import classNames from "classnames";
import { useNavContext } from "../../data/navProvider";

interface MenuItemProps {
  listItem: SectionName;
}
export function MenuItem({ listItem }: MenuItemProps) {
  const href = listItem.toLowerCase();
  const { activeSection } = useNavContext();

  const aClass = classNames({ [styles.active]: listItem === activeSection });

  return (
    <li className={styles.listItem}>
      <a href={`#${href}`} className={aClass}>
        {listItem}
      </a>
    </li>
  );
}
