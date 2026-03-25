import { max } from "date-fns";
import React from "react";

const styles = {
  card: {
    backgroundColor: "#1c2229",
    borderRadius: "16px",
    padding: "0",
    color: "#fff",
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "sans-serif",
    width: "100%",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    overflow: "hidden",
    maxWidth: "fit-content",
  },
  headerText: {
    fontSize: "10px",
    color: "#8a94a6",
    textAlign: "center" as const,
    padding: "14px",
    backgroundColor: "#1c2229",
    zIndex: 1,
  },
  imageContainer: {
    position: "relative" as const,
    width: "100%",
    height: "200px", // Increased height to accommodate the overlay
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
  },
  statusBadge: {
    position: "absolute" as const,
    top: "12px",
    right: "12px",
    backgroundColor: "rgba(32, 40, 50, 0.8)",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "11px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(4px)",
    zIndex: 3,
  },
  statusBadgeDeclined: {
    border: "1px solid #d46f75",
    color: "#d46f75",
  },
  statusBadgeApproved: {
    border: "1px solid #8ce4b0",
    color: "#8ce4b0",
  },
profileOverlay: {
  position: "absolute" as const,
  bottom: 0,
  left: 0,
  backgroundColor: "#1c2229",
  padding: "20px 40px 10px 20px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  zIndex: 2,
 width: "100%", 
  overflow: "hidden",
clipPath: ' polygon(0% 0%, 40.25% 0%, 45.55% 2.84%, 49.82% 6.19%, 52.82% 10.72%, 54.55% 15.96%, 56.91% 22.18%, 59.28% 28.41%, 60.83% 35.07%, 64.6% 40.76%, 71.59% 43.4%, 100% 44.15%, 100% 100%, 0% 100%)',

},
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    objectFit: "cover" as const,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "2px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
  },
  company: {
    fontSize: "11px",
    color: "#8a94a6",
  },
  id: {
    fontSize: "11px",
    color: "#8a94a6",
  },
  cardBody: {
    backgroundColor: "#1c2229",
    display: "flex",
    flexDirection: "column" as const,
    flex: 1,
  },
  detailsSection: {
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  detailRow: {
    display: "flex",
    fontSize: "11px",
    color: "#8a94a6",
  },
  detailLabel: {
    width: "90px",
  },
  detailValue: {
    flex: 1,
  },
  actionSection: {
    padding: "0 20px 24px 20px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "14px",
    marginTop: "auto",
  },
  searchBtn: {
    backgroundColor: "#8ce4b0",
    color: "#1b2128",
    border: "none",
    padding: "12px 0",
    width: "100%",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "13px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    color: "#d46f75",
    fontSize: "13px",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export interface Booking {
  status: "New Request" | "Request Declined" | "Sent for Approval" | "Approved";
  imageSrc: string;
  name: string;
  company: string;
  id: string;
  travelerNo: string;
  destination: string;
  travelDates: string;
  guestDetails: string;
  avatarSrc?: string;
}

export default function BookingCard({ booking }: { booking: Booking }) {
  const getBadgeStyle = () => {
    switch (booking.status) {
      case "Request Declined":
        return { ...styles.statusBadge, ...styles.statusBadgeDeclined };
      case "Approved":
        return { ...styles.statusBadge, ...styles.statusBadgeApproved };
      default:
        return styles.statusBadge;
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.headerText}>
        {booking.name} • {booking.travelDates.split(",")[0]} • {booking.destination}
      </div>
      
      <div style={styles.imageContainer}>
        <img src={booking.imageSrc} alt="Destination" style={styles.image} />
        <div style={getBadgeStyle()}>{booking.status}</div>
        
        {/* The overlay curve section */}
        <div style={styles.profileOverlay}>
          <img
            src={booking.avatarSrc || "https://i.pravatar.cc/150?img=12"}
            alt="Avatar"
            style={styles.avatar}
          />
          <div style={styles.profileInfo}>
            <span style={styles.name}>{booking.name}</span>
            <span style={styles.company}>{booking.company}</span>
            <span style={styles.id}>ID : {booking.id}</span>
          </div>
        </div>
      </div>
      
      <div style={styles.cardBody}>
        <div style={styles.detailsSection}>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Traveler no</span>
            <span>:</span>
            <span style={styles.detailValue}>&nbsp;&nbsp;{booking.travelerNo}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Destination</span>
            <span>:</span>
            <span style={styles.detailValue}>&nbsp;&nbsp;{booking.destination}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Travel Dates</span>
            <span>:</span>
            <span style={styles.detailValue}>&nbsp;&nbsp;{booking.travelDates}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Guest Details</span>
            <span>:</span>
            <span style={styles.detailValue}>&nbsp;&nbsp;{booking.guestDetails}</span>
          </div>
        </div>
        
        <div style={styles.actionSection}>
          <button style={styles.searchBtn}>Search More</button>
          <button style={styles.deleteBtn}>Delete</button>
        </div>
      </div>
    </div>
  );
}
