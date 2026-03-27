import React from "react";
import styles from "./BookingCard.module.css";

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
  const getBadgeClass = () => {
    switch (booking.status) {
      case "New Request":
        return `${styles.badge} ${styles.withTransparency}`;
      case "Request Declined":
        return `${styles.badge} ${styles.declined}`;
                 case "Sent for Approval":
        return  `${styles.badge} ${styles.badgeTextSent}`;
      default:
        return `${styles.badge} ${styles.normal}`;
    }
  };
    const getBadgename = () => {
    switch (booking.status) {
      case "New Request":
        return styles.badgeTextApproved;
      case "Request Declined":
        return ``;
         case "Sent for Approval":
        return styles.badgeTextSentField;
      default:
        return `${styles.badge} ${styles.normal}`;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#1c2229",
        borderRadius: "16px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        width: "100%",
        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
        overflow: "hidden",
        maxWidth: "fit-content",
      }}
    >
      {/* Header */}
      <div
        style={{
          fontSize: "10px",
          color: "#8a94a6",
          textAlign: "center",
          padding: "14px",
        }}
      >
        {booking.name} • {booking.travelDates.split(",")[0]} •{" "}
        {booking.destination}
      </div>

      {/* Image Section */}
      <div style={{ position: "relative", height: "200px" }}>
        <img
          src={booking.imageSrc || "/8img.jpg"}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* ✅ Status Badge */}
        <div className={getBadgeClass()}><span className={getBadgename()}>{booking.status}</span></div>

        {/* Curve Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "#1c2229",
            padding: "20px 40px 10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            overflow: "hidden",
            clipPath:
              'path("M 0 0 L120 0 A 45 37 0 0 1 160 17 A 38 30 0 0 0 198 34 L300 34 L300 100 L0 100 Z")',
          }}
        >
          <img
            src={booking.avatarSrc || "/7img.jpg"}
            alt=""
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              {booking.name}
            </span>
            <span style={{ fontSize: "11px", color: "#8a94a6" }}>
              {booking.company}
            </span>
            <span style={{ fontSize: "11px", color: "#8a94a6" }}>
              ID : {booking.id}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          backgroundColor: "#1c2229",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "20px", fontSize: "11px", color: "#8a94a6" }}>
          <div>Traveler no : {booking.travelerNo}</div>
          <div>Destination : {booking.destination}</div>
          <div>Travel Dates : {booking.travelDates}</div>
          <div>Guest Details : {booking.guestDetails}</div>
        </div>

        <div
          style={{
            padding: "0 20px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <button
            style={{
              backgroundColor: "#8ce4b0",
              color: "#1b2128",
              border: "none",
              padding: "12px 0",
              width: "100%",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Search More
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              color: "#d46f75",
              fontSize: "13px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}