import React from "react";
import { MenuList } from "./menuList";
import styles from "./menuMobileList.module.scss";
import classNames from "classnames";

interface MenuMobileListProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobileList({
  menuIsOpen,
  setMenuIsOpen,
}: MenuMobileListProps) {
  const containerClass = classNames(styles.container, {
    [styles.menuIsOpen]: menuIsOpen,
  });

  return (
    <div className={containerClass}>
      <MenuList setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}
