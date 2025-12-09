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

    <button className="add-btn" onClick={addToHandelCart}>
      Add to Cart
    </button>
  </div>
</div>

  )
}
