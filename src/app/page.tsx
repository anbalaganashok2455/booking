import React from "react";

const styles = {
  mainContent: {
    padding: "0 40px 40px 40px",
    width:'100%',
    margin: "0 auto",
  },
  workingTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    color: "#8a94a6",
    fontSize: "18px",
    backgroundColor: "#1c2229",
    borderRadius: "16px",
    marginTop: "20px",
    border: "1px dashed #2e3640",
  },
};

export default function HomePage() {
  return (
    <div style={styles.mainContent}>
      <div style={styles.workingTextContainer}>
        Welcome to the Home Page. Select "My Bookings" to view data.
      </div>
    </div>
  );
}
