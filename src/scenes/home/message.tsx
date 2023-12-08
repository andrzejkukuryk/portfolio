import React, { useEffect, useState } from "react";
import styles from "./message.module.scss";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

export function Message() {
  const [currentTextFirstLine, setCurrentTextFirstLine] = useState(" ");
  const [currentIndexFirstLine, setCurrentIndexFirstLine] = useState(0);
  const [currentTextSecondLine, setCurrentTextSecondLine] = useState("");
  const [currentIndexSecondLine, setCurrentIndexSecondLine] = useState(0);
  const [firstPartWritten, setFirtsPartWritten] = useState(false);
  const [firstPartDeleted, setFirstPartDeleted] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.slice(0, 2);

  const firstLine: string = "Andrzej Kukuryk";
  const musician: string = t("home_musician");
  const frontend: string = t("home_frontend");
  const typingSpeed = () => {
    const waitingTime = currentLanguage === "pl" ? 21 : 18;
    if (currentIndexSecondLine === waitingTime) {
      return 800;
    }
    return Math.floor(Math.random() * 80) + 50;
  };
  useEffect(
    () => typeText(),
    [
      currentIndexFirstLine,
      currentIndexSecondLine,
      firstPartWritten,
      firstPartDeleted,
    ]
  );

  useEffect(() => {
    if (firstPartWritten) {
      setCurrentTextSecondLine(frontend);
    }
  }, [currentLanguage]);

  const typeFirstLine = () => {
    if (currentIndexFirstLine < firstLine.length) {
      setTimeout(() => {
        setCurrentIndexFirstLine(currentIndexFirstLine + 1);
      }, typingSpeed());
    }
  };

  const typeSecondLine = () => {
    if (currentIndexSecondLine < musician.length) {
      setTimeout(() => {
        setCurrentIndexSecondLine(currentIndexSecondLine + 1);
      }, typingSpeed());
    } else {
      setTimeout(() => {
        setFirtsPartWritten(true);
      }, 600);
    }
  };

  const deleteSecondLine = () => {
    if (currentIndexSecondLine > 0) {
      setTimeout(() => {
        setCurrentIndexSecondLine(currentIndexSecondLine - 1);
      }, 50);
    } else {
      setFirstPartDeleted(true);
    }
  };

  const typeSecondLineAgain = () => {
    if (currentIndexSecondLine < frontend.length) {
      setTimeout(() => {
        setCurrentIndexSecondLine(currentIndexSecondLine + 1);
      }, typingSpeed());
    }
  };

  const typeText = () => {
    typeFirstLine();
    const typingFirstLine: string = firstLine.slice(0, currentIndexFirstLine);
    setCurrentTextFirstLine(typingFirstLine);
    if (currentIndexFirstLine === firstLine.length) {
      if (!firstPartWritten) {
        typeSecondLine();
        const typingSecondLine: string = musician.slice(
          0,
          currentIndexSecondLine
        );
        setCurrentTextSecondLine(typingSecondLine);
      }
      if (firstPartWritten && !firstPartDeleted) {
        deleteSecondLine();
        const deletingSecondLine: string = musician.slice(
          0,
          currentIndexSecondLine
        );
        setCurrentTextSecondLine(deletingSecondLine);
      }
      if (firstPartDeleted) {
        typeSecondLineAgain();
        const typingSecondLineAgain: string = frontend.slice(
          0,
          currentIndexSecondLine
        );
        setCurrentTextSecondLine(typingSecondLineAgain);
      }
    }
  };

  const secondLineClass = classNames([styles.secondLine], {
    [styles.wider]: currentLanguage === "pl",
  });

  return (
    <div className={styles.container}>
      <p className={styles.firstLine}>{currentTextFirstLine}</p>
      <p className={secondLineClass}>{currentTextSecondLine}</p>
    </div>
  );
}
