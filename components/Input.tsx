"use client";

import styles from "./Input.module.scss";

type InputProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
};

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}: InputProps) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? styles.errorInput : ""}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
