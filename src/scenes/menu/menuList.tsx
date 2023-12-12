import React from "react";
import { sections } from "../../models/menu";
import { MenuItem } from "./menuItem";
import styles from "./menuList.module.scss";
import { LanguageSwitch } from "./languageSwitch";

interface MenuListProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuList({ setMenuIsOpen }: MenuListProps) {

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {sections.map((section) => (
          <MenuItem
            listItem={section}
            setMenuIsOpen={setMenuIsOpen}
            key={section.name}
          />
        ))}
        <LanguageSwitch setMenuIsOpen={setMenuIsOpen} />
      </ul>
    </div>
  );
}
