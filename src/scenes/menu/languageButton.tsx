import React from "react";
import styles from "./languageButton.module.scss";
import classNames from "classnames";

interface LanguageButtonProps {
  handleClick: (lng: string) => void;
  language: string;
  currentLanguage: string;
}

export function LanguageButton({
  handleClick,
  language,
  currentLanguage,
}: LanguageButtonProps) {
  const buttonClass = classNames([styles.languageButton], {
    [styles.currentLanguage]: currentLanguage === language,
  });

  return (
    <button className={buttonClass} onClick={() => handleClick(language)}>
      {language.toUpperCase()}
    </button>
  );
}
