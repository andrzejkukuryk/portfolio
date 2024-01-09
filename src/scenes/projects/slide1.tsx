import React from "react";
import styles from "./slide1.module.scss";
import { useTranslation } from "react-i18next";

interface Slide1Props {
  screenDesktop: string;
  description: string;
  title: string;
}

export function Slide1({ screenDesktop, description, title }: Slide1Props) {
  const { t } = useTranslation();

  const descriptionParagraph = (paragraphNumber: number) => {
    const arrOfParagraphs = t(description).split("\n");

    return (
      <p className={styles.paragraph}>{arrOfParagraphs[paragraphNumber]}</p>
    );
  };
  return (
    <div className={styles.container}>
      <img
        src={screenDesktop}
        className={styles.screenDesktop}
        alt={`${title} desktop screen`}
      />
      {descriptionParagraph(0)}
    </div>
  );
}
