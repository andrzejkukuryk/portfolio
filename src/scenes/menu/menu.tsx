import React, { useEffect, useState } from "react";
import styles from "./menu.module.scss";
import { Title } from "./title";
import { MenuDesktop } from "./menuDesktop";
import { MenuMobileIcon } from "./menuMobileIcon";
import { MenuMobileList } from "./menuMobileList";

export function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (menuIsOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [menuIsOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Title />
        <MenuMobileIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <MenuDesktop setMenuIsOpen={setMenuIsOpen} />
      </div>
      <MenuMobileList menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}
