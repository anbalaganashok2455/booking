"use client";

import React from "react";
import FilterBar from "@/components/FilterBar";
import Tabs from "@/components/Tabs";

const styles = {
  mainContent: {
   display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden",
    padding: "40px 40px 0px 40px",
    width:'100%',
    margin: "0 auto",
    

    
  },
  titleBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    marginTop: "20px",
    height:'100%',
    overflow: "scroll",
  }
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={styles.mainContent}>
      <div style={styles.titleBar}>
        <FilterBar />
      </div>
      <Tabs />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
}
