import React from "react";

import styles from "./contactForm.module.scss";

export function ContactForm() {
  return (
    <div className={styles.formContainer}>
      <form>
        <div className={styles.formLine}>
          <div className={styles.formElement}>
            <label htmlFor="userName">Name: </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className={styles.inputCell}
            ></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="userLastName">Last name: </label>
            <input
              type="text"
              id="userLastName"
              name="userLastName"
              className={styles.inputCell}
            ></input>
          </div>
        </div>
        <div className={styles.formLine}>
          <div className={styles.formElement}>
            <label htmlFor="userEmail">Email: </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className={styles.inputCell}
              required
            ></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="userPhone">Phone: </label>
            <input
              type="text"
              id="userPhone"
              name="userPhone"
              className={styles.inputCell}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
