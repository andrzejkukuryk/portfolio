import React from "react";
import { useTranslation } from "react-i18next";
import { TileButton } from "./tileButton";
import styles from "./tileDescription.module.scss";
import { ButtonsContainer } from "./buttonsContainer";

interface TileDescriptionProps {
  title: string;
  description: string;
  appUrl: string;
  repositoryUrl: string;
}

export function TileDescription({
  title,
  description,
  appUrl,
  repositoryUrl,
}: TileDescriptionProps) {
  const { t } = useTranslation();

  const descriptionParagraphs = () => {
    return t(description)
      .split("\n")
      .map((str) => <p key={`paragraph${str[1]}${str[3]}${str[4]}`}>{str}</p>);
  };

  return (
    <div className={styles.descriptionContainer}>
      <h3 className={styles.tileHeader}>{title}</h3>
      {descriptionParagraphs()}
      <ButtonsContainer repositoryUrl={repositoryUrl} appUrl={appUrl} />
    </div>
  );
}
