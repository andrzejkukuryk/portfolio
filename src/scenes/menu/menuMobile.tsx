import React, { useState } from "react";
import styles from "./menuMobile.module.scss";
import { MenuMobileIcon } from "./menuMobileIcon";
import { MenuMobileList } from "./menuMobileList";

interface MenuMobileProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsOpen, setMenuIsOpen }: MenuMobileProps) {
  return (
    <div className={styles.container}>
      <MenuMobileIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MenuMobileList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}
