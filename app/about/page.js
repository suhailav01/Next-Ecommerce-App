"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
function About() {
  const router = useRouter()
  return (
  <div style={{marginTop:"150px"}} className="container py-5">

    {/* ---------- HERO SECTION ---------- */}
    <div className="text-center mb-5">
      <h1 className="fw-bold display-5">Welcome to MyApp</h1>
      <p className="text-muted fs-5">
        A modern ecommerce platform built for fast, easy & secure shopping.
      </p>
    </div>

    {/* ---------- STATS SECTION ---------- */}
    <div className="row text-center mb-5">
      <div  onClick={()=>router.push('/products')} className="col-md-4 mb-3">
        <div  className="p-4 bg-light rounded shadow-sm">
          <h2  className="fw-bold">10K+</h2>
          <p className="text-muted">Happy Customers</p>
        </div>
      </div>
      <div onClick={()=>router.push('/products')} className="col-md-4 mb-3">
        <div className="p-4 bg-light rounded shadow-sm">
          <h2 className="fw-bold">5K+</h2>
          <p className="text-muted">Products Available</p>
        </div>
      </div>
      <div onClick={()=>router.push('/products')} className="col-md-4 mb-3">
        <div className="p-4 bg-light rounded shadow-sm">
          <h2 className="fw-bold">99.9%</h2>
          <p className="text-muted">Secure Transactions</p>
        </div>
      </div>
    </div>

    {/* ---------- WHO WE ARE ---------- */}
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="fw-bold">Who We Are</h3>
      <p className="mt-2">
        MyApp is a trusted ecommerce platform designed to deliver smooth,
        user-friendly and secure online shopping. We focus on high-quality
        products, fast loading speed and a premium buying experience.
      </p>
    </div>

    {/* ---------- MISSION & VISION ---------- */}
    <div className="row mb-4">
      <div className="col-md-6">
        <div className="bg-light p-4 rounded shadow-sm">
          <h4 className="fw-bold">Our Mission</h4>
          <p>
            To deliver top-quality products with an exceptional online shopping
            experience where everything is simple, fast and enjoyable.
          </p>
        </div>
      </div>

      <div className="col-md-6 mt-3 mt-md-0">
        <div className="bg-light p-4 rounded shadow-sm">
          <h4 className="fw-bold">Our Vision</h4>
          <p>
            To become one of the most trusted ecommerce platforms by offering
            affordability, reliability and a premium online marketplace.
          </p>
        </div>
      </div>
    </div>

    {/* ---------- WHY CHOOSE US ---------- */}
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <h3 className="fw-bold">Why Choose Us?</h3>
      <ul className="mt-3 fs-6">
        <li>⚡ Fast & smooth browsing experience</li>
        <li>🔐 Highly secure checkout & payment</li>
        <li>🛍️ Premium-quality curated products</li>
        <li>💎 Clean, modern & user-friendly UI</li>
        <li>📦 Fast delivery options (coming soon)</li>
        <li>🤝 24/7 Support for customers</li>
      </ul>
    </div>

    {/* ---------- TECH STACK ---------- */}
    <div className="bg-light p-4 rounded shadow-sm mb-4">
      <h3 className="fw-bold">Technology Used</h3>
      <p className="mt-2">
        Next js • FakeStore API • Bootstrap • context API
      </p>
    </div>

    {/* ---------- DEVELOPER CARD ---------- */}
    <div className="p-4 bg-white rounded shadow-sm mb-4 text-center">
      <h3 className="fw-bold">Developer</h3>
      <p className="mt-2 fs-5">
        Created by <b>Suhail AV</b>
      </p>
      <p className="text-muted">
        A passionate React developer focused on building clean,
        modern & user-friendly applications.
      </p>
    </div>

    {/* ---------- CONTACT SECTION ---------- */}
    <div className="p-4 bg-dark text-white rounded shadow-sm mb-5">
      <h3 className="fw-bold">Contact Us</h3>
      <p className="mt-2">📧 Email: support@myapp.com</p>
      <p>📞 Phone: +91 7736533702</p>
      <p>🌐 Website: www.myapp.com</p>
    </div>

  </div>
);

}

export default About;