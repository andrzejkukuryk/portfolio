import React from "react";
import { useNavContext } from "../../data/navProvider";
import styles from "./contact.module.scss";
import { usePosition } from "../../hooks/usePosition";
import { ContactInfo } from "./contactInfo";
import { ContactForm } from "./contactForm";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { updateContactPosition } = useNavContext();
  const { ref } = usePosition(updateContactPosition);
  const { t } = useTranslation();

  return (
    <section ref={ref} id="contact" className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>{t("contact_contact")}</h2>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
