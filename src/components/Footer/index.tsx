import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-200 text-gray-900">
      <div className=" pb-20 pt-10 text-center text-sm">
        Made with love © {new Date().getFullYear()},{" "}
        <span className="text-primary">Ocraniawan Patattan</span>
      </div>
    </div>
  );
}
