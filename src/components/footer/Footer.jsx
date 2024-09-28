import logoSvg from "../../assets/icons/logo.svg";
import nameWebsiteSvg from "../../assets/icons/nameWebsite.svg";

import "./footer.css";

import facebookSvg from "../../assets/icons/facebook.svg";
import twitterSvg from "../../assets/icons/twitter.svg";
import linkedinSvg from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer my-container" id="footer">
      <div className="info-container">
        <div className="main-info-container">
          <div className="logo-name-container">
            <img src={logoSvg} className="d-block mx-auto logo-footer" />
            <img src={nameWebsiteSvg} className="name-website-footer" />
          </div>
          <p className="desc-website">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>

        <div>
          <h3>Service</h3>
          <div className="links">
            <a href="#">Payment & Tax</a>
            <a href="#">Features</a>
            <a href="#">View Booking</a>
            <a href="#">Support</a>
          </div>
        </div>

        <div>
          <h3>About</h3>
          <div className="links">
            <a href="#">About us</a>
            <a href="#">News</a>
            <a href="#">Pricing</a>
            <a href="#">New Property</a>
          </div>
        </div>

        <div>
          <h3>Our Location</h3>
          <p className="location">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <div className="icons">
            <a href="#">
              <img src={facebookSvg} alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src={twitterSvg} alt="Twitter Icon" />
            </a>
            <a href="#">
              <img src={linkedinSvg} alt="Linkedin Icon" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright-container">
        <p className="text">Copyright 2024 flora. All Rights Reserved</p>
        <div className="links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
