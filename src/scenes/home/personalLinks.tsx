import React from "react";
import { personalLinks } from "../../data/personalLinks";
import { PersonalLinksItem } from "./personalLinksItem";
import styles from "./personalLinks.module.css";

export function PersonalLinks() {
  const createList = () => {
    return personalLinks.map((link) => <PersonalLinksItem info={link} />);
  };

  return (
    <div>
      <h3>Personal links:</h3>
      <div className={styles.linksContainer}>{createList()}</div>
    </div>
  );
}
