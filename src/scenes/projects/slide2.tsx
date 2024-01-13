import React from "react";
import styles from "./slide2.module.scss";
import { StackInfo } from "../../data/stackIcons";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { ProjectStack } from "./projectStack";
import { ButtonsContainer } from "./buttonsContainer";

interface Slide2Props {
  screensMobile?: string[];
  description: string;
  stack: StackInfo[];
  appUrl: string;
  repositoryUrl: string;
  title: string;
}

export function Slide2({
  screensMobile,
  description,
  stack,
  appUrl,
  repositoryUrl,
  title,
}: Slide2Props) {
  const { t } = useTranslation();

  const screenMobile1 = screensMobile ? screensMobile[0] : "";
  const screenMobile2 = screensMobile ? screensMobile[1] : "";

  const descriptionParagraph = (paragraphNumber: number) => {
    const arrOfParagraphs = t(description).split("\n");

    return <p className={paragraphClass}>{arrOfParagraphs[paragraphNumber]}</p>;
  };

  const paragraphClass = classNames([styles.paragraph], {
    [styles.narrow]: !screensMobile,
  });

  const descriptionContainerClass = classNames([styles.descriptionContainer], {
    [styles.wider]: !screensMobile,
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
      <div className={descriptionContainerClass}>
        {descriptionParagraph(1)}

        <ProjectStack stack={stack} narrow={!screensMobile} />
        {descriptionParagraph(2)}
        <div className={styles.showHideButtons}>
          <ButtonsContainer
            appUrl={appUrl}
            repositoryUrl={repositoryUrl}
            narrow={!screensMobile}
          />
        </div>
      </div>
    </div>
  );
}
