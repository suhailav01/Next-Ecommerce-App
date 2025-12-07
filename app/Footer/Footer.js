"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram ,FaLinkedin} from "react-icons/fa";
import Link from "next/link";
function Footer() {
  const router = useRouter()
  return (
    <footer
  className="text-light pt-5 pb-3 mt-5"
  style={{
    background: "linear-gradient(135deg, #0d0d0d, #1a1a1a)",
  }}
>
  <div className="container">
    <div className="row">

      <div className="col-md-4 mb-4">
        <div className="d-flex align-items-center mb-3">
          <h1 onClick={()=>router.push("/")} className="logo">NexStore</h1>
        </div>
        <p className="text-secondary" style={{ lineHeight: "1.8" }}>
          Your can shop everything you need.  
          Best prices 
        </p>
      </div>

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-3 text-info">Quick Links</h5>
        <ul className="list-unstyled footer-links">
          <li><Link href="/" className="footer-link">🏠 Home</Link></li>
          <li><Link href="/about" className="footer-link">ℹ️ About</Link></li>
          <li><Link href="/contact" className="footer-link">📞 Contact</Link></li>
          <li><Link href="/cart" className="footer-link">🛒 Cart</Link></li>
        </ul>
      </div>

      <div className="col-md-4 mb-4">
        <h5 className="fw-bold mb-3 text-info">Follow Us</h5>

        <div className="d-flex gap-4">
          <a href="https://facebook.com"  className="social-icon">
            <FaFacebook size={32} />
          </a>

          <a href="https://twitter.com"  className="social-icon">
            <FaTwitter size={32} />
          </a>

          <a href="https://instagram.com"  className="social-icon">
            <FaInstagram size={32} />
          </a>

          {/* <a href="https://linkedin.com"  className="social-icon">
            <FaLinkedin size={32} />
          </a> */}
        </div>
      </div>
    </div>

    <hr className="border-secondary mt-4" />

    <div className="text-center">
      <small className="text-secondary">
        © {new Date().getFullYear()} FlipCart. All rights reserved.
      </small>
    </div>
  </div>

  {/* Footer CSS */}
  <style>
    {`
      .footer-link {
        color: #ccc;
        text-decoration: none;
        display: block;
        padding: 4px 0;
        transition: 0.3s;
        font-size: 16px;
      }
      .footer-link:hover {
        color: #00eaff;
        transform: translateX(6px);
      }

      .social-icon {
        color: #ccc;
        transition: 0.3s;
      }
      .social-icon:hover {
        color: #00eaff;
        transform: scale(1.25);
      }

      .footer-logo:hover {
        transform: scale(1.07);
      }
    `}
  </style>
</footer>

  );
}

export default Footer;
