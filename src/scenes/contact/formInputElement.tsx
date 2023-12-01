import React from "react";
import styles from "./formInputElement.module.scss";

interface FormInputElementProps {
  id: string;
  label: string;
  inputType: string;
  required?: boolean;
}

export function FormInputElement({
  id,
  label,
  inputType,
  required,
}: FormInputElementProps) {
  return (
    <div className={styles.formElement}>
      <label htmlFor={id}>
        {label}
        {required ? " *" : ""}{" "}
      </label>
      <input
        type={inputType}
        id={id}
        name={id}
        className={styles.inputCell}
        required={required}
      ></input>
    </div>
  );
}
