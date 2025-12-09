"use client"
import { addToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import React, { use } from "react";
import { useRouter } from "next/navigation";
export default function Page(props) {
  const params = use (props.params)
  const { id } = params;
  const dispatch = useDispatch()
  const router = useRouter()
  let fra = [
    {
      "id": 1,
      "title": "Eau De Parfum - Floral Breeze",
      "brand": "Skinn by Titan",
      "price": 29.99,
      "image": "https://images.pexels.com/photos/672051/pexels-photo-672051.jpeg",
      "rating": 4.7
    },
    {
      "id": 2,
      "title": "Luxury Perfume - Royal Oud",
      "brand": "Armaf",
      "price": 39.99,
      "image": "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg",
      "rating": 4.8
    },
    {
      "id": 3,
      "title": "Body Spray - Cool Water",
      "brand": "Davidoff",
      "price": 15.99,
      "image": "https://images.pexels.com/photos/932587/pexels-photo-932587.jpeg",
      "rating": 4.6
    },
    {
      "id": 4,
      "title": "Perfume Mist - Sweet Vanilla",
      "brand": "Bath & Body Works",
      "price": 14.49,
      "image": "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg",
      "rating": 4.5
    },
    {
      "id": 5,
      "title": "Attar Roll-on - Musk Amber",
      "brand": "Al-Rehab",
      "price": 9.99,
      "image": "https://images.pexels.com/photos/264870/pexels-photo-264870.jpeg",
      "rating": 4.4
    },
    {
      "id": 6,
      "title": "Eau De Toilette - Classic Blue",
      "brand": "Nautica",
      "price": 25.99,
      "image": "https://images.pexels.com/photos/18656841/pexels-photo-18656841.jpeg",
      "rating": 4.6
    },
    {
      "id": 7,
      "title": "Signature Perfume - Noir Intense",
      "brand": "Calvin Klein",
      "price": 49.99,
      "image": "https://images.pexels.com/photos/15097440/pexels-photo-15097440.jpeg",
      "rating": 4.7
    },
    {
      "id": 8,
      "title": "Perfume Body Spray - Fresh Citrus",
      "brand": "Fogg",
      "price": 7.99,
      "image": "https://images.pexels.com/photos/33587973/pexels-photo-33587973.jpeg",
      "rating": 4.3
    },
    {
      "id": 9,
      "title": "Deodorant Spray - Silver Ion",
      "brand": "Nivea",
      "price": 4.99,
      "image": "https://images.pexels.com/photos/20470833/pexels-photo-20470833.jpeg",
      "rating": 4.2
    },
    {
      "id": 10,
      "title": "Premium Oud Perfume",
      "brand": "Lattafa",
      "price": 34.99,
      "image": "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg",
      "rating": 4.8
    },
    {
      "id": 11,
      "title": "Perfume Gift Set - Men",
      "brand": "AXE",
      "price": 19.99,
      "image": "https://images.pexels.com/photos/264950/pexels-photo-264950.jpeg",
      "rating": 4.4
    },
    {
      "id": 12,
      "title": "Perfume Gift Set - Women",
      "brand": "Engage",
      "price": 17.99,
      "image": "https://images.pexels.com/photos/34833637/pexels-photo-34833637.jpeg",
      "rating": 4.5
    },
    {
      "id": 13,
      "title": "Long-lasting Perfume - Ocean Sky",
      "brand": "Yardley London",
      "price": 22.99,
      "image": "https://images.pexels.com/photos/34833289/pexels-photo-34833289.jpeg",
      "rating": 4.6
    },
    {
      "id": 14,
      "title": "Unisex Perfume - Oriental Musk",
      "brand": "Ajmal",
      "price": 31.99,
      "image": "https://images.pexels.com/photos/34811052/pexels-photo-34811052.jpeg",
      "rating": 4.7
    },
    {
      "id": 15,
      "title": "Fresh Cologne Spray",
      "brand": "Denver",
      "price": 6.49,
      "image": "https://images.pexels.com/photos/34806968/pexels-photo-34806968.jpeg",
      "rating": 4.3
    },
    {
      "id": 16,
      "title": "Body Mist - Lavender Dream",
      "brand": "Plum",
      "price": 9.99,
      "image": "https://i.pinimg.com/736x/d8/20/4e/d8204e4d7cb208268f70ec6adf8cab27.jpg",
      "rating": 4.4
    },
    {
      "id": 17,
      "title": "Premium Attar - Pure Oud",
      "brand": "Swiss Arabian",
      "price": 27.99,
      "image": "https://i.pinimg.com/736x/77/f2/6c/77f26c2f11c4c1722f7a04a315d778fa.jpg",
      "rating": 4.6
    },
    {
      "id": 18,
      "title": "Roll-on Deodorant - Fresh Bloom",
      "brand": "Rexona",
      "price": 3.49,
      "image": "https://i.pinimg.com/736x/44/bc/5e/44bc5eb3c92d5a25aa37d8696042c47c.jpg",
      "rating": 4.2
    },
    {
      "id": 19,
      "title": "Body Cologne - Sweet Rose",
      "brand": "Layer'r Wottagirl",
      "price": 5.49,
      "image": "https://i.pinimg.com/1200x/e9/70/8f/e9708fcfece9baec6a8f9c1b607e02cd.jpg",
      "rating": 4.3
    },
    {
      "id": 20,
      "title": "Luxury Eau De Parfum - Amber Wood",
      "brand": "Rasasi",
      "price": 54.99,
      "image": "https://i.pinimg.com/736x/59/c5/1b/59c51bd8f1999a3cab8e0ccf6c9e5410.jpg",
      "rating": 4.9
    }
  ]

  // Convert id to number for matching
  const product = fra.find((item) => item.id === Number(id));
  const addToHandleCart = () =>{
     router.push('/cart')
     dispatch(addToCart(product))
  }
  if (!product) {
    return (
      <div style={{ marginTop: "150px" }}>
        <h2>Product not found </h2>
      </div>
    );
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

  );
}
