import React from "react";
import styles from "./languageSwitch.module.scss";
import i18n from "../../i18n";

const lngs = {
  en: { nativeName: "English", internationalCode: "EN" },
  pl: { nativeName: "Polski", internationalCode: "PL" },
};

export function LanguageSwitch() {
  return (
    <li className={styles.listItem}>
      {Object.keys(lngs).map((lng) => (
        <button
          type="submit"
          className={styles.languageButton}
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          //   disabled={i18n.resolvedLanguage === lng}
        >
          {
            //@ts-ignore
            lngs[lng].internationalCode
          }
        </button>
      ))}
    </li>
  );
}
