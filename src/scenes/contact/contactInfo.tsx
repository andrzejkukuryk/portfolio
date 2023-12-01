import React from "react";

import styles from "./contactInfo.module.scss";

export function ContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
        <h3>Phone:</h3>
        <p>
          <a href="tel:+48888908481">+48 888 908 481</a>
        </p>
      </div>
      <div className={styles.infoDiv}>
        <h3>Email:</h3>
        <p>
          <a href="mailto:andrzejkukuryk@gmail.com" target="_blank">
            andrzejkukuryk@gmail.com
          </a>
        </p>
      </div>
      <div className={styles.infoDiv}>
        <h3>Location:</h3>
        <p>Bytom, Poland</p>
      </div>
    </div>
  );
}
