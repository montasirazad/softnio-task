import clockLogo from "../../assets/clock_logo.png";
import fbIcon from "../../assets/fb_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";
import linkedinIcon from "../../assets/linkedin_icon.png";
import locationPin from "../../assets/location_pin.png";
import mailIcon from "../../assets/mail_icon.png";
import phoneIcon from "../../assets/phone_icon.png";
import twitterIcon from "../../assets/twiter_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container-main">
        <div className="footer-container">
          <div className="footer-text">
            <h1>We ready to have you the best dining experiences</h1>
          </div>
          <div className="footer-card-container">
            <div className="footer-card-detail">
              <img src={clockLogo} alt="phone_icon" />
              <h3>OPENING HOURS</h3>
              <p>Monday - Sunday</p>
              <p>9:00 AM to 11:30 PM</p>
            </div>

            <div className="footer-card-detail">
              <img src={phoneIcon} alt="phone_icon" />
              <h3>LET&apos;S TALK</h3>
              <p>Phone: 1-800-222-4545</p>
              <p>Fax: 1-800-222-4545</p>
            </div>

            <div className="footer-card-detail">
              <img src={mailIcon} alt="phone_icon" />
              <h3>BOOK A TABLE</h3>
              <p>Email: demo@website.com</p>
              <p>Support: support@website.com</p>
            </div>

            <div className="footer-card-detail">
              <img src={locationPin} alt="phone_icon" />
              <h3>Our Address</h3>
              <p>123 Street New York City , United</p>
              <p>States Of America.</p>
            </div>
          </div>

          <div className="social-container">
            <div className="social-icon">
              <a href="">
                <img src={fbIcon} alt="" />
              </a>
            </div>
            <div className="social-icon">
              <a href="">
                <img src={twitterIcon} alt="" />
              </a>
            </div>
            <div className="social-icon">
              <a href="">
                <img src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="social-icon">
              <a href="">
                <img src={linkedinIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="footer-rights">
            <p>© 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
