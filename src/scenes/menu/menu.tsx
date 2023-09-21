import React, { useState } from "react";
import styles from "./menu.module.scss";
import { Title } from "./title";
import { MenuDesktop } from "./menuDesktop";
import { MenuMobileIcon } from "./menuMobileIcon";
import { MenuMobileList } from "./menuMobileList";

export function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Title />
        <MenuMobileIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <MenuDesktop />
      </div>
      <MenuMobileList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}
