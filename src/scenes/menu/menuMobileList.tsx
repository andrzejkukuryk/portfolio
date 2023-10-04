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
  const handleClick = () => {
    setMenuIsOpen(false);
  };
  const containerClass = classNames(styles.container, {
    [styles.menuIsOpen]: menuIsOpen,
  });

  return (
    <div
      // onClick={handleClick}
      className={containerClass}
    >
      <MenuList setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}
