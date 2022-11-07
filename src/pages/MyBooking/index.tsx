import React from "react";
import BokingCard from "../../components/Card/BookingCard";

export default function MyBooking() {
  return (
    <div className="bg-white min-h-screen px-4 md:px-14 py-10">
      <div className="px-4 text-2xl font-bold pb-8">
        <span className="block text-gray-600 mb-2">My Booking</span>
        <hr />
      </div>
      <div>
        <BokingCard />
      </div>
    </div>
  );
}
