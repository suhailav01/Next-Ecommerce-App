"use client"
import React, { use } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import { useRouter } from 'next/navigation';
export default function page(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const params = use(props.params);
    const { id } = params;
    let watches = [
        {
            "id": 1,
            "title": "Classic Leather Strap Watch",
            "price": 2499,
            "image": "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
        },
        {
            "id": 2,
            "title": "Stainless Steel Luxury Watch",
            "price": 3999,
            "image": "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg"
        },
        {
            "id": 3,
            "title": "Black Dial Chronograph Watch",
            "price": 4599,
            "image": "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg"
        },
        {
            "id": 4,
            "title": "Brown Retro Analog Watch",
            "price": 2199,
            "image": "https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg"
        },
        {
            "id": 5,
            "title": "Blue Steel Sports Watch",
            "price": 2899,
            "image": "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg"
        },
        {
            "id": 6,
            "title": "Black Rugged Military Watch",
            "price": 3299,
            "image": "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg"
        },
        {
            "id": 7,
            "title": "Dual Time Analog Digital Watch",
            "price": 2599,
            "image": "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg"
        },
        {
            "id": 8,
            "title": "Silver Chain Bracelet Watch",
            "price": 2799,
            "image": "https://images.pexels.com/photos/2155319/pexels-photo-2155319.jpeg"
        },
        {
            "id": 9,
            "title": "Minimalist Black Leather Watch",
            "price": 1699,
            "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg"
        },
        {
            "id": 10,
            "title": "Premium Golden Dial Watch",
            "price": 4999,
            "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
        },
        {
            "id": 11,
            "title": "Rubber Strap Sports Watch",
            "price": 1599,
            "image": "https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg"
        },
        {
            "id": 12,
            "title": "Titanium Digital Smartwatch",
            "price": 5499,
            "image": "https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg"
        },
        {
            "id": 13,
            "title": "Blue Leather Chronograph",
            "price": 3399,
            "image": "https://images.pexels.com/photos/128206/pexels-photo-128206.jpeg"
        },
        {
            "id": 14,
            "title": "Royal Brown Premium Watch",
            "price": 2899,
            "image": "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg"
        },
        {
            "id": 15,
            "title": "Luxury Silver-Gold Watch",
            "price": 4799,
            "image": "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg"
        },
        {
            "id": 16,
            "title": "Sporty Blue Digital Watch",
            "price": 1999,
            "image": "https://images.pexels.com/photos/1697220/pexels-photo-1697220.jpeg"
        },
        {
            "id": 17,
            "title": "Full Black Stainless Steel Watch",
            "price": 3699,
            "image": "https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg"
        },
        {
            "id": 18,
            "title": "Elegant Thin Dial Watch",
            "price": 1599,
            "image": "https://images.pexels.com/photos/1120275/pexels-photo-1120275.jpeg"
        },
        {
            "id": 19,
            "title": "Premium Brown Luxury Watch",
            "price": 4499,
            "image": "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg"
        },
        {
            "id": 20,
            "title": "Modern Blue Mesh Strap Watch",
            "price": 2899,
            "image": "https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg"
        }
    ]
    const product = watches.find((item) => item.id === Number(id))

    const addToHandleCart = () => {
        router.push('/cart')
        dispatch(addToCart(product))
    }
    if (!product) {
        return (
            <div style={{ marginTop: "150px" }}>
                <h2>products not fount</h2>
            </div>
        )
    }
    return (
       <div className="container product-card p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-center">
      
  {/* Product Image */}
  <div className="product-image-wrapper mb-4 mb-md-0">
    <img
      src={product.image}
      alt={product.title}
      className="product-image"
    />
  </div>

  {/* Product Details */}
  <div className="ms-md-4 text-center text-md-start product-details">
    <h2>{product.title}</h2>

    <p className="description">{product.description}</p>

    <span className="category">{product.category}</span>

    <h3 className="price mt-3">${product.price}</h3>

    <button className="add-btn" onClick={addToHandleCart}>
      Add to Cart
    </button>
  </div>
</div>

    )
}
