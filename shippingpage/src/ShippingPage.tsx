import React, { useState } from "react";
import "./Shipping.css";

const ShippingPage: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("ABOUT CORE");

  const navLinks = ["SHOP", "GARAGE SALE", "ALL PRODUCTS", "ABOUT CORE"];

  return (
    <div className="shipping-page">
      {/* ---------------- TOP BAR ---------------- */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-left"></div>
          <div className="top-center">BUY 1 GET 1 50% OFF</div>
          <div className="top-right">
            <a href="#" className="socbtn youtube" aria-label="YouTube">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              style={{ fill: "#ffffff" }}
            >
              <path
                d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
              ></path>
            </svg>
            </a>
            <a href="#" className="socbtn linkedin" aria-label="LinkedIn">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              style={{ fill: "#ffffff" }}
            >
              <path
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
              ></path>
            </svg>
            </a>
            <a href="#" className="socbtn x-twitter" aria-label="X/Twitter">
              <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      width={20}
      height={20}
      fill="#ffffff"
    >
      <path
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
        fill={"white"}
      />
    </svg>
            </a>
            <a href="#" className="socbtn facebook" aria-label="Facebook">
               <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <ellipse cx="25" cy="25" rx="15" ry="17" fill="#fff" />
              <path
                d="M26.237,34.025h-5.06v-9.522h-3.359v-4.144h3.359v-2.738c0-3.328,1.968-5.16,4.922-5.16h3.633v4.067h-2.428c-1.168,0-1.242,0.473-1.242,1.26v2.57h3.766l-0.603,4.144h-3.163v9.522Z"
                fill="#0f1724"
              />
            </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- NAVBAR ---------------- */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-left">
            <a href="#" className="site-logo" aria-label="CoreX Home">
              logo
            </a>
          </div>
          <div className="nav-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`nav-link ${activeLink === link ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                }}
              >
                {link}
                {link === "SHOP" && (
                  <svg
                    className="chev"
                    viewBox="0 0 24 24"
                    width="10"
                    height="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
                {activeLink === link && <span className="brand-x">X</span>}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <a href="#" className="icon-btn" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Wishlist">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                  4.42 3 7.5 3c1.74 0 3.41.81 
                  4.5 2.09C13.09 3.81 14.76 3 
                  16.5 3 19.58 3 22 5.42 22 
                  8.5c0 3.78-3.4 6.86-8.55 
                  11.54L12 21.35z" />
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 
                2.3-5 5 2.3 5 5 5zm0 2c-3.3 
                0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-2 .9-2 
                2s.9 2 2 2 2-.9 
                2-2-.9-2-2-2zm10 
                0c-1.1 0-2 .9-2 
                2s.9 2 2 2 2-.9 
                2-2-.9-2-2-2zM7.16 
                14l.84-2h8.18c.75 0 
                1.41-.41 1.75-1.03l3.58-6.49-1.73-.99L16.6 
                10H8.53l-1.1-2H2v2h4l3.6 
                7.59-1.35 2.44C8.08 
                20.37 8 20.68 8 21c0 
                .55.45 1 1 1h12v-2H9.42c.06-.09.11-.19.15-.3L10.1 
                18h7.45c.75 0 
                1.41-.41 1.75-1.03l3.58-6.49-1.73-.99L16.6 
                14H7.16z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

     {/* ---------------- POLICY CONTENT ---------------- */} <main className="policy-container"> <div className="policytext"> <h1 className="policy-title">Shipping Policy</h1> <section className="policy-section"> <h2>Customer Service</h2> <p className="policy-text"> Thank you for visiting CoreX Nutrition. This is an open-source demo project created by Open Code Chicago. While our website is designed to simulate a real supplements store, please note that we do not process real payments or ship actual products. </p> <p className="policy-text"> If you have any questions about the project or contributions, please contact the team at:{" "} <a href="mailto:info@opencodechicago.org"> info@opencodechicago.org </a> </p> </section> <section className="policy-section"> <h2>Shipping Locations</h2> <p className="policy-text"> For demonstration purposes, all orders are considered to “ship” within the United States. In reality, this site is part of a community coding project and no physical shipments are made. </p> </section> <section className="policy-section"> <h2>Back Orders</h2> <p className="policy-text"> In a real e-commerce scenario, back-ordered items may cause delays or refunds. On CoreX Nutrition, all items are always available for demo purposes — no real inventory or credit card transactions occur. </p> </section> <section className="policy-section"> <h2>Damaged, Lost, or Stolen Merchandise</h2> <p className="policy-text"> Since no physical products are shipped, there is no risk of damage, loss, or theft. This section is included only to illustrate how a real policy might look on a production store. </p> </section> <section className="policy-section"> <h2>Delivery Delays</h2> <p className="policy-text"> For realism, we assume orders would typically ship within 48–72 business hours and arrive within 7–12 business days. Again, this is demo content only — no real shipments will take place. </p> </section> <section className="policy-section"> <h2>Disclaimer</h2> <p className="disclaimer-text"> <span>⚠️</span> CoreX Nutrition is a community open-source project. The site does not sell or deliver products. All content is for demonstration purposes only. </p> </section> </div> </main> {/* ---------------- FOOTER ---------------- */} <footer className="footer"> <div className="footer-top"> <div className="footer-grid"> <div> <h2 className="footer-logo">logo</h2> <div className="social-icons"> <a href="#"><i className="fa-brands fa-youtube"></i></a> <a href="#"><i className="fa-brands fa-linkedin-in"></i></a> <a href="#"><i className="fa-brands fa-x-twitter"></i></a> <a href="#"><i className="fa-brands fa-facebook-f"></i></a> </div> <p className="addr">1234 N Main St,<br/>Chicago, IL 60607</p> </div> <div className="footer-links"> <h4>Customer Care</h4> <ul> <li><a href="#">My Account</a></li> <li><a href="#">My Orders</a></li> <li><a href="#">Email Support</a></li> <li><a href="#">Call Support</a></li> </ul> </div> <div className="footer-links"> <h4>Information</h4> <ul> <li><a href="#">Shipping Policy</a></li> <li><a href="#">Returns Policy</a></li> <li><a href="#">Privacy Policy</a></li> <li><a href="#">Accessibility</a></li> <li><a href="#">Terms of Service</a></li> </ul> </div> <div> <h4 className="newsletter-title">GET OUR LATEST<br/>DEALS AND DISCOUNTS!</h4> <div className="newsletter"> <input type="email" placeholder="Enter your email" /> <button><i className="fa-solid fa-arrow-right"></i></button> </div> <p className="newsletter-caption">Become A CoreX Insider!</p> </div> </div> </div> <div className="footer-bottom"> <p className="fda-disclaimer"> **The Food and Drug Administration has not evaluated these statements. This product is not meant to diagnose, treat, cure, or prevent any illness. </p> <div className="footer-bottom-row"> <p className="legal"> © 2025 CoreX Nutrition | Powered by Open Code Chicago </p> <div className="payments"> <span>Amazon</span> <span>Amex</span> <span>Apple Pay</span> <span>Google Pay</span> <span>MasterCard</span> <span>PayPal</span> <span>Shop</span> <span>VISA</span> </div> </div> </div> </footer> </div> ); }; export default ShippingPage;
