import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center">All Right Reserved &copy; VibeMart</h5>
      <p className="text-center mt-3">
        <Link to="/">About Us</Link>|<Link to="/">Contact Us</Link>|
        <Link to="/">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
