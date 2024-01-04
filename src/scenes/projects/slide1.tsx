import React from "react";
import styles from "./slide1.module.scss";
import { StackInfo } from "../../data/stackIcons";
import { ProjectStack } from "./projectStack";
import classNames from "classnames";

interface Slide1Props {
  screenDesktop: string;
  screenMobile?: string;
  stack: StackInfo[];
  title: string;
}

export function Slide1({
  screenDesktop,
  screenMobile,
  stack,
  title,
}: Slide1Props) {
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
      <div className={styles.showHideStack}>
        <ProjectStack stack={stack} />
      </div>
    </div>
  );
}
