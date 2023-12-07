import React, { useEffect, useState } from "react";
import styles from "./languageSwitch.module.scss";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { LanguageButton } from "./languageButton";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polski" },
};

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleClick = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <li className={styles.listItem}>
      {Object.keys(lngs).map((lng) => (
        <LanguageButton
          handleClick={handleClick}
          language={lng}
          currentLanguage={currentLanguage}
          key={lng}
        />
      ))}
    </li>
  );
}