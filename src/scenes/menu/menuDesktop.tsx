import React from "react";
import styles from "./menuDesktop.module.scss";
import { MenuList } from "./menuList";

interface MenuDesktopProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuDesktop({ setMenuIsOpen }: MenuDesktopProps) {
  return (
    <div className={styles.container}>
      <MenuList setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}
