"use client";
import { useRouter } from 'next/navigation';
import {addToCart} from '../Redux/cartSlice'
import { useDispatch } from 'react-redux';
export default function ProductDetails({ product }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const addToHandelCart = () => {
    router.push('/cart')
    dispatch(addToCart(product))
  }
  return (
     <div

      className="container  p-5 d-flex flex-column flex-md-row align-items-center justify-content-center"
      style={{
        background: "white",
        borderRadius: "15px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        padding: "40px",
        transition: "0.3s ease",
        marginTop: "150px"
      }}
    >
      {/* Product Image */}
      <div
        style={{
          padding: "20px",
          borderRadius: "15px",
          background: "#f7f7f7",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "0.3s",
        }}
        className="hover-img"
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "400px", objectFit: "contain" }}
        />
      </div>

      {/* Product Details */}
      <div className="ms-md-4 mt-4 mt-md-0" style={{ maxWidth: "500px" }}>
        <h2 style={{ fontWeight: "700" }}>{product.title}</h2>

        <p style={{ color: "#6c757d", fontSize: "15px", lineHeight: "1.6" }}>
          {product.description}
        </p>

        <span
          style={{
            backgroundColor: "#eef2ff",
            padding: "5px 12px",
            borderRadius: "20px",
            color: "#4f46e5",
            fontSize: "14px",
          }}
        >
          {product.category}
        </span>

        <h3 className="mt-3" style={{ fontWeight: "700", color: "#1e40af" }}>
          ${product.price}
        </h3>

        <button
          onClick={addToHandelCart}
          style={{
            marginTop: "15px",
            backgroundColor: "#22c55e",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0 4px 10px rgba(34,197,94,0.3)",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
