"use client";

import { useEffect, useState } from "react";
import styles from "./WelcomeMessage.module.scss";

export default function WelcomeMessage() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        setName(userData.name?.first || "User");
      } catch {
        setName("User");
      }
    }
  }, []);

  return (
    <h2 className={styles.welcomeMessage}>
      {name ? (
        <>
          Hello, {name}! <br /> Welcome to your dashboard.
        </>
      ) : (
        "Hello! Welcome to your dashboard."
      )}
    </h2>
  );
}
