import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.scss";

export function ContactForm() {
  const [messageSend, setMessageSend] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setMessageSend(true);
          if (form.current && form.current.reset) {
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    setMessageSend(false);
  };

  return (
    <div className={styles.formContainer}>
      <form ref={form} onSubmit={sendEmail} onChange={handleChange}>
        <div className={styles.formLine}>
          <div className={styles.formElement}>
            <label htmlFor="userName">Name </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className={styles.inputCell}
            ></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="userLastName">Last name </label>
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
            <label htmlFor="userEmail">Email * </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className={styles.inputCell}
              required
            ></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="userPhone">Phone </label>
            <input
              type="tel"
              id="userPhone"
              name="userPhone"
              className={styles.inputCell}
            ></input>
          </div>
        </div>

        <div className={styles.formMessage}>
          <label htmlFor="message">Message * </label>
          <textarea
            id="message"
            name="message"
            className={styles.inputCell}
            autoComplete="off"
            required
          ></textarea>
        </div>
        <input type="submit" value="Send" className={styles.submitButton} />
        {messageSend && <p className={styles.sendInfo}>Message sent</p>}
      </form>
    </div>
  );
}
