import React from "react";
import { SectionInfo } from "../../models/menu";
import styles from "./menuItem.module.scss";
import classNames from "classnames";
import { useNavContext } from "../../data/navProvider";
import { useTranslation } from "react-i18next";

interface MenuItemProps {
  listItem: SectionInfo;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function MenuItem({ listItem, setMenuIsOpen }: MenuItemProps) {
  const href = listItem.name.toLowerCase();
  const { activeSection } = useNavContext();
  const { t } = useTranslation();

  const handleClick = () => {
    setMenuIsOpen(false);
  };

  const aClass = classNames({
    [styles.active]: listItem.name === activeSection,
  });

  return (
    <li className={styles.listItem}>
      <a href={`#${href}`} className={aClass}>
        <div onClick={handleClick} className={styles.labelContainer}>
          {t(listItem.translationKey)}
        </div>
      </a>
    </li>
  );
}
