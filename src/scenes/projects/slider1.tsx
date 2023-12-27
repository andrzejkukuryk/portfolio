import React from "react";
import styles from "./slider1.module.scss";
import { StackInfo } from "../../data/stackIcons";
import { ProjectStack } from "./projectStack";

interface Slider1Props {
  screenDesktop: string;
  screenMobile?: string;
  stack: StackInfo[];
  title: string;
}

export function Slider1({
  screenDesktop,
  screenMobile,
  stack,
  title,
}: Slider1Props) {
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
