"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookingCard, { Booking } from "./BookingCard";

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    width: "100%",
  },
  noData: {
    color: "#8a94a6",
    fontSize: "14px",
    textAlign: "center" as const,
    marginTop: "40px",
  },
};

const mockBookings: Booking[] = [
  {
    status: "New Request",
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Raja",
    company: "Infosys",
    id: "OO89767",
    travelerNo: "+91 7665440066",
    destination: "Dubai",
    travelDates: "30th Jan, 2026 - 6th Feb, 2026",
    guestDetails: "other details",
    avatarSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    status: "New Request",
    imageSrc: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Raja",
    company: "TCS",
    id: "OO89767",
    travelerNo: "+91 7665440066",
    destination: "Jaipur",
    travelDates: "30th Jan, 2026 - 6th Feb, 2026",
    guestDetails: "other details",
    avatarSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    status: "New Request",
    imageSrc: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Raja",
    company: "Infosys",
    id: "OO89767",
    travelerNo: "+91 7665440066",
    destination: "Dubai",
    travelDates: "30th Jan, 2026 - 6th Feb, 2026",
    guestDetails: "other details",
    avatarSrc: "https://i.pravatar.cc/150?img=13",
  },
  {
    status: "New Request",
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Raja",
    company: "Wipro",
    id: "OO89767",
    travelerNo: "+91 7665440066",
    destination: "Jaipur",
    travelDates: "30th Jan, 2026 - 6th Feb, 2026",
    guestDetails: "other details",
    avatarSrc: "https://i.pravatar.cc/150?img=14",
  },
  {
    status: "Request Declined",
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Raja",
    company: "Infosys",
    id: "OO89767",
    travelerNo: "+91 7665440066",
    destination: "Dubai",
    travelDates: "30th Jan, 2026 - 6th Feb, 2026",
    guestDetails: "other details",
    avatarSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    status: "Sent for Approval",
    imageSrc: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    name: "Raja",
    company: "TCS",
    id: "OO89767",
    travelerNo: "+91 7665440066",
    destination: "Dubai",
    travelDates: "30th Jan, 2026 - 6th Feb, 2026",
    guestDetails: "other details",
    avatarSrc: "https://i.pravatar.cc/150?img=13",
  },
];

function CardsContent() {
  const searchParams = useSearchParams();
  const companyFilter = searchParams?.get("company") || "";
  const textSearch = searchParams?.get("q")?.toLowerCase() || "";

  const filteredBookings = mockBookings.filter((booking) => {
    let matchesCompany = true;
    let matchesText = true;
    
    if (companyFilter) {
      matchesCompany = booking.company === companyFilter;
    }
    
    if (textSearch) {
      matchesText = booking.name.toLowerCase().includes(textSearch) || 
                    booking.destination.toLowerCase().includes(textSearch);
    }
    
    return matchesCompany && matchesText;
  });

  if (filteredBookings.length === 0) {
    return <div style={styles.noData}>No bookings found for this company.</div>;
  }

  return (
    <div style={styles.grid}>
      {filteredBookings.map((booking, idx) => (
        <BookingCard key={idx} booking={booking} />
      ))}
    </div>
  );
}

export default function CardsContainer() {
  return (
    <Suspense fallback={<div style={styles.noData}>Loading bookings...</div>}>
      <CardsContent />
    </Suspense>
  );
}
