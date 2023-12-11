import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contactForm.module.scss";
import { FormInputElement } from "./formInputElement";
import { useTranslation } from "react-i18next";

export function ContactForm() {
  const [messageSend, setMessageSend] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const { t } = useTranslation();

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
          <FormInputElement
            id="userName"
            inputType="text"
            label={t("contact_name")}
          />
          <FormInputElement
            id="userLastName"
            inputType="text"
            label={t("contact_last")}
          />
        </div>
        <div className={styles.formLine}>
          <FormInputElement
            id="userEmail"
            inputType="email"
            label="Email"
            required
          />
          <FormInputElement
            id="userPhone"
            inputType="tel"
            label={t("contact_phone")}
          />
        </div>

        <div className={styles.formMessage}>
          <label htmlFor="message">{t("contact_message")} * </label>
          <textarea
            id="message"
            name="message"
            className={styles.inputCell}
            autoComplete="off"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          value={t("contact_button_send")}
          className={styles.submitButton}
        />
        {messageSend && <p className={styles.sendInfo}>{t("contact_sent")}</p>}
      </form>
    </div>
  );
}
