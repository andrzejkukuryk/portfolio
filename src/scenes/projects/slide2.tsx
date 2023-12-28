import React from "react";
import styles from "./slide2.module.scss";
import { StackInfo } from "../../data/stackIcons";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

interface Slide2Props {
  screensMobile?: string[];
  description: string;
  stack: StackInfo[];
  title: string;
}

export function Slide2({
  screensMobile,
  description,
  stack,
  title,
}: Slide2Props) {
  const { t } = useTranslation();

  const screenMobile1 = screensMobile ? screensMobile[0] : "";
  const screenMobile2 = screensMobile ? screensMobile[1] : "";

  const descriptionParagraphs = () => {
    return t(description)
      .split("\n")
      .map((str) => (
        <p
          className={paragraphClass}
          key={`paragraph${str[1]}${str[3]}${str[4]}`}
        >
          {str}
        </p>
      ));
  };

  const paragraphClass = classNames([styles.paragraph], {
    [styles.narrow]: !screensMobile,
  });

  return (
    <div className={styles.container}>
      {screensMobile && (
        <div className={styles.screensContainer}>
          <img
            className={styles.screenMobile1}
            src={screenMobile1}
            alt={`${title} mobile screen`}
          />
          <img
            className={styles.screenMobile2}
            src={screenMobile2}
            alt={`${title} mobile screen`}
          />
        </div>
      )}
      {descriptionParagraphs()}
    </div>
  );
}
