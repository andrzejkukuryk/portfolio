import React from "react";
import { ReactComponent as OpenMenu } from "../../assets/menu.svg";
import { ReactComponent as CloseMenu } from "../../assets/closeMenu.svg";

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
    <div onClick={handleClick}>
      {!menuIsOpen && <OpenMenu />}
      {menuIsOpen && <CloseMenu />}
    </div>
  );
}
