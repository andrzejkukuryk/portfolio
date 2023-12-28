import React from "react";
import styles from "./slide1.module.scss";
import { StackInfo } from "../../data/stackIcons";
import { ProjectStack } from "./projectStack";

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
  return (
    <div className={styles.container}>
      <img
        src={screenDesktop}
        className={styles.screenDesktop}
        alt={`${title} desktop screen`}
      />
      <ProjectStack stack={stack} />
    </div>
  );
}
