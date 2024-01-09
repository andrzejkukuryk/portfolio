import React from "react";
import styles from "./buttonsContainer.module.scss";
import { useTranslation } from "react-i18next";
import { TileButton } from "./tileButton";
import classNames from "classnames";

interface ButtonsContainerProps {
  appUrl: string;
  repositoryUrl: string;
  narrow?: boolean;
}

export function ButtonsContainer({
  repositoryUrl,
  appUrl,
  narrow,
}: ButtonsContainerProps) {
  const { t } = useTranslation();

  const handleClickLiveButton = () => {
    window.open(appUrl, "_blank");
  };

  const handleClickRepoButton = () => {
    window.open(repositoryUrl, "_blank");
  };

  const buttonsContainerClass = classNames([styles.buttonsContainer], {
    [styles.narrow]: narrow,
  });
  return (
    <div className={buttonsContainerClass}>
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
