import React from "react";

const styles = {
  mainContent: {
    padding: "0 40px 40px 40px",
    maxWidth: "1400px",
    margin: "0 auto",
    width: "100%",
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

export default function GroupTravelPage() {
  return (
    <div style={styles.mainContent}>
      <div style={styles.workingTextContainer}>
        Group Travel Page is under working text
      </div>
    </div>
  );
}
