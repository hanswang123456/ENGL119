import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>Contact</h3>
        <div>(647) 123-4567</div>
        <div>WaterlooRents@gmail.com</div>
      </div>
      <div>
        <h3>Offices</h3>
        <div>Waterloo, Ontario Canada</div>
        <div>Address 123 N2L 3G1</div>
      </div>
      <div>
        {" "}
        <h3>About</h3>
        <div>Services</div>
        <div>Searching Tips</div>
      </div>
    </footer>
  );
}
