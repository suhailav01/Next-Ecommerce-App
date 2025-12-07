"use client";
import React from 'react'
import '../topDeales/top.css'
import { useRouter } from 'next/navigation';
function Tope() {
    const router = useRouter()
    const deals = [
        {
            id: 1,
            title: "Mega Electronics Sale",
            description: "Up to 60% off on gadgets, headphones ",
            image: "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg",
            button: "Shop Now",
        },
        {
            id: 2,
            title: "Fashion Deals",
            description: "Trendy outfits at exclusive discounts.",
            image: "https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg",
            button: "View Offer",
        },
        {
            id: 3,
            title: "Beauty Essentials",
            description: "Premium beauty products under ₹499.",
            image: "https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg",
            button: "Explore",
        },
        {
            id: 4,
            title: "Home & Kitchen",
            description: "Best selling kitchen tools & home ",
            image: "https://images.pexels.com/photos/3259593/pexels-photo-3259593.jpeg",
            button: "Discover",
        },
        {
            id: 5,
            title: "Sports & Fitness",
            description: "Shoes, gymwear & gear on big discounts.",
            image: "https://images.pexels.com/photos/3020129/pexels-photo-3020129.jpeg",
            button: "Buy Now",
        },
        {
            id: 6,
            title: "Accessories Zone",
            description: "Latest accessories at crazy prices.",
            image: "https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg",
            button: "Grab Deal",
        },
        {
            id: 7,
            title: "Accessories Zone",
            description: "Latest accessories at crazy prices.",
            image: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
            button: "Grab Deal",
        },
        {
            id: 8,
            title: "Accessories Zone",
            description: "Latest accessories at crazy prices.",
            image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
            button: "Grab Deal",
        },

    ];
  return (
     <div className="topdeals-container">
            <h2 className="topdeals-title"> Top Deals For You</h2>

            <div className="row g-4">
                {deals.map((deal) => (
                    <div key={deal.id} className="col-md-3">
                        <div className="deal-card" onClick={()=>router.push("/products")}>
                            <div className="deal-img-wrapper">
                                <img src={deal.image} alt={deal.title} className="deal-img" />
                            </div>

                            <div className="deal-details">
                                <h4 className="deal-heading">{deal.title}</h4>
                                <p className="deal-description">{deal.description}</p>
                                <button className="deal-btn">{deal.button}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Tope;