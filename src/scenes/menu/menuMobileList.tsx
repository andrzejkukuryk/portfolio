import React from "react";
import { MenuList } from "./menuList";

interface MenuMobileListProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobileList({
  menuIsOpen,
  setMenuIsOpen,
}: MenuMobileListProps) {
  return (
    <>
      {menuIsOpen && (
        <div>
          <MenuList />
        </div>
      )}
    </>
  );
}
