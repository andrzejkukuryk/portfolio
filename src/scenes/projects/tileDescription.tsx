import React from "react";
import { useTranslation } from "react-i18next";
import { TileButton } from "./tileButton";
import styles from "./tileDescription.module.scss";

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

  const handleClickLiveButton = () => {
    window.open(appUrl, "_blank");
  };

  const handleClickRepoButton = () => {
    window.open(repositoryUrl, "_blank");
  };

  return (
    <div className={styles.descriptionContainer}>
      <h3 className={styles.tileHeader}>{title}</h3>
      {descriptionParagraphs()}
      <div className={styles.buttonsContainer}>
        <TileButton
          handleClick={handleClickLiveButton}
          label={t("projects_button_live")}
          dark
        />
        <TileButton
          handleClick={handleClickRepoButton}
          label={t("projects_button_repo")}
        />
      </div>
    </div>
  );
}
