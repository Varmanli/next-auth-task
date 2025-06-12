"use client";

import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;

export default function AuthPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!iranPhoneRegex.test(phone)) {
      setError("Invalid Iranian phone number");
      return;
    }

    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();

      localStorage.setItem("user", JSON.stringify(data.results[0]));

      router.push("/dashboard");
    } catch (err) {
      setError("Failed to connect to server");
      console.error(err);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContainer}>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit} className={styles.authForm} noValidate>
          <Input
            label="Iranian Phone Number"
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
            error={error}
            placeholder="e.g. 09123456789"
          />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}
