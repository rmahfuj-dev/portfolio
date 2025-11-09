import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-base-100 text-center">
      <p className="text-base-content/70">
        © {new Date().getFullYear()} Mahfuj. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
