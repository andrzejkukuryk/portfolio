import React from "react";
import styles from "./buttonsContainer.module.scss";
import { useTranslation } from "react-i18next";
import { TileButton } from "./tileButton";

interface ButtonsContainerProps {
  appUrl: string;
  repositoryUrl: string;
}

export function ButtonsContainer({
  repositoryUrl,
  appUrl,
}: ButtonsContainerProps) {
  const { t } = useTranslation();

  const handleClickLiveButton = () => {
    window.open(appUrl, "_blank");
  };

  const handleClickRepoButton = () => {
    window.open(repositoryUrl, "_blank");
  };

  return (
    <div className={styles.buttonsContainer}>
      <TileButton
        handleClick={handleClickLiveButton}
        label={t("projects_button_live")}
      />
      <TileButton
        handleClick={handleClickRepoButton}
        label={t("projects_button_repo")}
      />
    </div>
  );
}
