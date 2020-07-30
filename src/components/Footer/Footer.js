import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>175 Bùi Điền, Quận 8, TP.HCM</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>079 761 1526</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>tiemthitngon@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>About Us</h3>
                </div>
                <div className="footer-text">
                  <p>
                    Sản phẩm tươi sạch cho mọi người. Bữa ăn ngon miệng, chi phí ổn thỏa, an toàn.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Delivery</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="/">
                  <i className="fab fa-facebook-f facebook-bg" />
                </a>
                <a href="/">
                  <i className="fab fa-twitter twitter-bg" />
                </a>
                <a href="/">
                  <i className="fab fa-google-plus-g google-bg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 text-center text-lg-center">
              <div className="copyright-text">
                <p>
                  Copyright © 2020, All Right Reserved By Duy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
