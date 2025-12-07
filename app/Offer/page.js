"use client";
import React from 'react'
import '../Offer/offer.css'
import { useRouter } from 'next/navigation';
function Offers() {
    const router = useRouter()
    const offers = [
    {
      id: 1,
      title: "50% Off on Women's Fashion products",
      description: "Amazing deals on latest men's clothing collection.",
      image: "https://i.pinimg.com/1200x/9f/1d/a4/9f1da4e5426c7d353352748da9b6667b.jpg",
      button: "Shop Now",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free on Electronics",
      description: "Exciting deals on headphones, speakers, and more!",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
      button: "Grab Offer",
    },
    {
      id: 3,
      title: "Flat 30% Off on Beauty Products",
      description: "Enhance your beauty with premium products.",
      image: "https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg",
      button: "Explore Now",
    },
    {
      id: 4,
      title: "Special Skincare Discounts product",
      description: "Glow with exclusive skincare offers.",
      image: "https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg",
      button: "Explore Now",
    },
    {
      id: 5,
      title: "Exclusive Makeup Deals",
      description: "Top makeup products at discounted prices.",
      image: "https://images.pexels.com/photos/5113056/pexels-photo-5113056.jpeg",
      button: "Explore Now",
    },
    {
      id: 6,
      title: "Luxury Beauty Essentials",
      description: "Get the best beauty essentials on sale.",
      image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg",
      button: "Explore Now",
    },
    {
      id: 7,
      title: "Luxury Beauty Essentials",
      description: "Get the best beauty essentials on sale.",
      image: "https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg",
      button: "Explore Now",
    },
     {
      id: 8,
      title: "Luxury Beauty Essentials",
      description: "Get the best beauty essentials on sale.",
      image: "https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg",
      button: "Explore Now",
    },
   
  ];

  return (
    <div className="offers-container">
  <h2 className="offers-title">Special Offers</h2>

  <div className="row g-4">
    {offers.map((offer) => (
      <div key={offer.id} className="col-md-3">
        <div className="offer-card" onClick={()=>router.push("/products")}>
          <div className="offer-image-wrapper">
            <img src={offer.image} alt={offer.title} className="offer-image" />
          </div>

          <div className="offer-details">
            <h4 className="offer-heading">{offer.title}</h4>
            <p className="offer-description">{offer.description.slice(0,30)}</p>
            <button className="offer-btn">{offer.button}</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Offers;