import React from "react";
import { personalLinks } from "../../data/personalLinks";
import { PersonalLinksItem } from "./personalLinksItem";
import styles from "./personalLinks.module.scss";

export function PersonalLinks() {
  const createList = () => {
    return personalLinks.map((link) => (
      <PersonalLinksItem info={link} key={`link_${link.label}`} />
    ));
  };

  return (
    <div>
      <h3>Personal links:</h3>
      <div className={styles.linksContainer}>{createList()}</div>
    </div>
  );
}
