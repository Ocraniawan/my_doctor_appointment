import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const navbarMenu = [
  { name: "Home", route: "/" },
  { name: "My Booking", route: "/my-booking" },
  { name: "About Us", route: "/about" },
];

export default function Navbar() {
  let location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [path]);

  return (
    <div className="sticky top-0 z-50 bg-secondary">
      <div className="flex justify-between items-center">
        <div className="m-2 mx-8 px-4 py-2 bg-primary rounded-2xl text-white text-sm h-12 hidden md:block">
          <span className="text-2xl font-bold text-white ">N</span>
        </div>
        <div className="flex justify-center md:justify-end text-lg py-6 px-8">
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
    </div>
  );
}
