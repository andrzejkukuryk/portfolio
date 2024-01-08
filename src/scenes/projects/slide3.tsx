import React from "react";
import styles from "./slide3.module.scss";
import { TileButton } from "./tileButton";
import { useTranslation } from "react-i18next";
import { ButtonsContainer } from "./buttonsContainer";
import classNames from "classnames";

interface Slide3Props {
  screenDesktop: string;
  screenMobile?: string;
  repositoryUrl: string;
  appUrl: string;
  title: string;
}

export function Slide3({
  screenDesktop,
  screenMobile,
  repositoryUrl,
  appUrl,
  title,
}: Slide3Props) {
  const screenDesktopClass = classNames([styles.screenDesktop], {
    [styles.marginBottom]: !screenMobile,
  });

  const screenMobileClass = classNames({
    [styles.screenMobile]: screenMobile,
    [styles.hideMobile]: !screenMobile,
  });

  return (
    <div className={styles.container}>
      <img
        src={screenDesktop}
        className={screenDesktopClass}
        alt={`${title} desktop screen`}
      />
      <img
        src={screenMobile}
        className={screenMobileClass}
        alt={`${title} mobile screen`}
      />
      <div className={styles.showHideButtons}>
        <ButtonsContainer repositoryUrl={repositoryUrl} appUrl={appUrl} />
      </div>
    </div>
  );
}
