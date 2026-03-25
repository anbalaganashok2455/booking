import React from "react";

const styles = {
  workingTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    color: "#8a94a6",
    fontSize: "18px",
    backgroundColor: "#1c2229",
    borderRadius: "16px",
    border: "1px dashed #2e3640",
  },
};

export default function CancelledPage() {
  return (
    <div style={styles.workingTextContainer}>
      Cancelled Page is under working text
    </div>
  );
}
