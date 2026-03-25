"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    borderBottom: "1px solid #2a313a",
    marginBottom: "30px",
  },
  tab: {
    padding: "10px 0",
    fontSize: "14px",
    color: "#8a94a6",
    textDecoration: "none",
    position: "relative" as const,
  },
  tabActive: {
    color: "#fff",
    padding: "10px 0",
    fontSize: "14px",
    textDecoration: "none",
    position: "relative" as const,
  },
  indicator: {
    position: "absolute" as const,
    bottom: "-1px",
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#5ec992",
  },
};

export default function Tabs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : "";

  const tabs = [
    { label: "Pending", path: "/booking/pending" },
    { label: "Cancelled", path: "/booking/cancelled" },
    { label: "Past Booking", path: "/booking/past" },
    { label: "Approved", path: "/booking/approved" },
  ];

  return (
    <div style={styles.container}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.label}
            href={`${tab.path}${queryString}`}
            style={isActive ? styles.tabActive : styles.tab}
          >
            {tab.label}
            {isActive && <div style={styles.indicator}></div>}
          </Link>
        );
      })}
    </div>
  );
}
