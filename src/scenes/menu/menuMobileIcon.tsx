import React from "react";
import { ReactComponent as OpenMenu } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/closeMenu.svg";
import styles from "./menuMobileIcon.module.scss";

interface MenuMobileIconProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobileIcon({
  menuIsOpen,
  setMenuIsOpen,
}: MenuMobileIconProps) {
  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      {!menuIsOpen && <OpenMenu className={styles.icon} />}
      {menuIsOpen && <CloseMenu className={styles.icon} />}
    </div>
  );
}
