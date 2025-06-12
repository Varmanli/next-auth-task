"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
import WelcomeMessage from "@/components/WelcomeMessage";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashboardContainer}>
        <WelcomeMessage />
      </div>
    </div>
  );
}
