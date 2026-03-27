"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "#1b1e31",
    padding: "15px 20px",
    borderRadius: "12px",
    gap: "10px",
    marginBottom: "40px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    width: "140px",
  },
  searchInputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    flex: 1,
    minWidth: "180px",
  },
  label: {
    fontSize: "10px",
    color: "#8a94a6",
    marginBottom: "8px",
  },
  controlContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #2e3640",
    borderRadius: "8px",
    padding: "8px 12px",
    backgroundColor: "transparent",
    height: "35px",
  },
  control: {
    backgroundColor: "transparent",
    color: "#a4b1c6",
    border: "none",
    outline: "none",
    fontSize: "12px",
    width: "100%",
  },
  select: {
    cursor: "pointer",
    appearance: "none" as const,
  },
  searchBtn: {
    backgroundColor: "#8ce4b0",
    border: "none",
    borderRadius: "3px",
    width: "40px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

};

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const initialCompany = searchParams?.get("company") || "";
  const initialSearch = searchParams?.get("q") || "";

  const [localCompany, setLocalCompany] = useState(initialCompany);
  const [localSearch, setLocalSearch] = useState(initialSearch);

  useEffect(() => {
    setLocalCompany(searchParams?.get("company") || "");
    setLocalSearch(searchParams?.get("q") || "");
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (localCompany) {
      params.set("company", localCompany);
    }
    if (localSearch) {
      params.set("q", localSearch);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputGroup}>
        <span style={styles.label}>Company</span>
        <div style={styles.controlContainer}>
          <select
            style={{ ...styles.control, ...styles.select }}
            value={localCompany}
            onChange={(e) => setLocalCompany(e.target.value)}
          >
            <option value="">All</option>
            <option value="Infosys">Infosys</option>
            <option value="TCS">TCS</option>
            <option value="Wipro">Wipro</option>
          </select>
        </div>
      </div>

      <button style={styles.searchBtn} onClick={handleSearch}>
        <span><img style={{ width: "25px",  }} src="/Search.png" alt="Search" /></span>
      </button>
    </div>
  );
}
