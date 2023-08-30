import React from "react";
import { SectionName } from "../../../models/menu";

interface MenuItemProps {
  listItem: SectionName;
}
export function MenuItem({ listItem }: MenuItemProps) {
  const href = listItem.toLowerCase();

  return (
    <li>
      <a href={`#${href}`}>{listItem}</a>
    </li>
  );
}
