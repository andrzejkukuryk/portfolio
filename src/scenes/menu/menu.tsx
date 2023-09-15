import React, { useState } from "react";
import styles from "./menu.module.scss";
import { Title } from "./title";
import { MenuDesktop } from "./menuDesktop";
import { MenuMobile } from "./menuMobile";
import classNames from "classnames";

export function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const containerClass = classNames(styles.container, {
    [styles.menuIsOpen]: menuIsOpen,
  });
  return (
    <div className={containerClass}>
      <div className={styles.innerContainer}>
        <Title />
        <MenuMobile menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <MenuDesktop />
      </div>
    </div>
  );
}
