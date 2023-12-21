import React from "react";
import { personalLinks } from "../../data/personalLinks";
import { PersonalLinksItem } from "./personalLinksItem";
import styles from "./personalLinks.module.scss";

export function PersonalLinks() {

  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        {personalLinks.map((link) => (
          <PersonalLinksItem info={link} key={`link_${link.label}`} />
        ))}
      </div>
    </div>
  );
}
