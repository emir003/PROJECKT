import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Welcome</h4>
            <ul className="list-unstyled">
              <li>342-420-6969</li>
              <li>Bishkek-Kyrgyzstan</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>342-420-6969</li>
              <li>Bishkek-Kyrgyzstan</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>about us</h4>
            <ul className="list-unstyled">
              <li>342-420-6969</li>
              <li>Bishkek-Kyrgyzstan</li>
              <li>123 Street South North</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES INC | All right
            reserved | Terms Of Serivce | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
