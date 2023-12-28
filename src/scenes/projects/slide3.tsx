import React from "react";
import styles from "./slide3.module.scss";

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
  return (
    <div className={styles.container}>
      <img
        src={screenDesktop}
        className={styles.screenDesktop}
        alt={`${title} desktop screen`}
      />
    </div>
  );
}
