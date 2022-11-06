import React from "react";
import { useLocation, Link } from "react-router-dom";

const navbarMenu = [
  { name: "Home", route: "/" },
  { name: "My Booking", route: "/my-booking" },
  { name: "About Us", route: "/about" },
];

export default function Navbar() {
  let location = useLocation();
  const path = location.pathname;

  return (
    <div className=" sticky top-0 z-50 bg-secondary">
      <div className="flex justify-center md:justify-end text-lg p-8">
        {navbarMenu.map((nav, idx) => (
          <div
            key={idx}
            className={`px-4 ${
              path === nav.route && "text-primary font-medium"
            }`}
          >
            <Link to={nav.route}>{nav.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
