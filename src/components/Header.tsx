"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    backgroundColor: "#1b1e23",
    color: "#fff",
   boxShadow: "0 0 0 .5px rgba(66, 94, 83, 0.32), 0 0 19px rgba(72, 158, 122, 0.3)"
    
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    marginRight: "40px",
    textDecoration: "none",
    color: "#fff",
  },
  nav: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  navLink: {
    cursor: "pointer",
    fontSize: "14px",
    opacity: 0.7,
    textDecoration: "none",
    color: "#fff",
  },
  navLinkActive: {
    cursor: "pointer",
    fontSize: "14px",
    color: "#5ec992",
    opacity: 1,
    textDecoration: "none",
  },
  navLinkDot: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position:'relative' as const
  },
  dot: {
    width: "6px",
    height: "6px",
    backgroundColor: "#5ec992",
    borderRadius: "50%",
    display: "inline-block",
    position: "absolute" as const,
    top: "-3px",
    left: "-9px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  icon: {
    fontSize: "20px",
    cursor: "pointer",
    opacity: 0.7,
  },
  profilePic: {
    width: "30px",

    borderRadius: "50%",


    objectFit: "cover" as const,
  },
};

export default function Header() {
  const pathname = usePathname();

  const getStyle = (path: string, partialMatch: boolean = false) => {
    if (path === "/" && pathname === "/") return styles.navLinkActive;
    if (partialMatch && pathname && pathname.startsWith(path)) return styles.navLinkActive;
    if (pathname === path) return styles.navLinkActive;
    return styles.navLink;
  };

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <Link href="/" style={styles.logo}>dest<span style={{ color: "#5ec992" }}>i</span>in</Link>
      </div>
      <nav style={styles.nav}>
        <Link href="/" style={getStyle("/")}>
          Home
        </Link>
        <Link href="/booking/pending" style={getStyle("/booking", true)}>
          My Bookings
        </Link>
        <Link href="/group-travel" style={getStyle("/group-travel")}>
          Group Travel
        </Link>
        <Link href="/rewards" style={{ ...getStyle("/rewards"), ...styles.navLinkDot }}>
          <span style={styles.dot}></span>
          Rewards & promos
        </Link>
      </nav>
      <div style={styles.actions}>
        <div style={styles.icon}>
          <img src="/Setting.png" alt="Search" style={{ width: "30px",}}/>
        </div>
        <img
          src="/Profile.png"
          alt="Profile"
          style={styles.profilePic}
        />
      </div>
    </header>
  );
}
