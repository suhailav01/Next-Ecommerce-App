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
    let shoes = [
        {
            "id": 1,
            "title": "White Casual Sneakers",
            "price": 1999,
            "image": "https://i.pinimg.com/736x/15/e0/bb/15e0bb75c3608e85b330b6382c0b9621.jpg"
        },
        {
            "id": 2,
            "title": "Black Running Sports Shoes",
            "price": 2499,
            "image": "	https://i.pinimg.com/1200x/b8/bf/a0/b8bfa0bdc41e863fb346a53aace3e5e2.jpg"
        },
        {
            "id": 3,
            "title": "Brown Leather Formal Shoes",
            "price": 2999,
            "image": "https://i.pinimg.com/736x/51/df/82/51df82a3d782f76d8fdd2e0fa296bfd6.jpg"
        },
        {
            "id": 4,
            "title": "High-top Street Sneakers",
            "price": 2799,
            "image": "https://i.pinimg.com/736x/d8/ae/88/d8ae88fd538ba8311de30b470cfade10.jpg"
        },
        {
            "id": 5,
            "title": "Grey Mesh Walking Shoes",
            "price": 1599,
            "image": "https://i.pinimg.com/1200x/87/2f/a7/872fa76ba29aaf15bf71f3bee4c97251.jpg"
        },
        {
            "id": 6,
            "title": "Tan Derby Leather Shoes",
            "price": 3199,
            "image": "https://i.pinimg.com/1200x/9c/07/3d/9c073d0eb6573395caf1adcfee2f5431.jpg"
        },
        {
            "id": 7,
            "title": "Classic Black Formal Shoes",
            "price": 2899,
            "image": "https://i.pinimg.com/736x/46/7e/9e/467e9ef50943e6f6c5029ec766cdd4ff.jpg"
        },
        {
            "id": 8,
            "title": "White & Blue Stylish Sneakers",
            "price": 2199,
            "image": "https://i.pinimg.com/736x/21/b6/81/21b681efac16ea401730a217315bde60.jpg"
        },
        {
            "id": 9,
            "title": "Chunky Trendy Sneakers",
            "price": 2599,
            "image": "https://i.pinimg.com/736x/bd/ee/19/bdee19d10680603ae7cc1b2381b66b35.jpg"
        },
        {
            "id": 10,
            "title": "Brown Suede Loafers",
            "price": 1999,
            "image": "https://i.pinimg.com/736x/9d/f9/f6/9df9f604134f8d21f90b5e408ea50835.jpg"
        },
        {
            "id": 11,
            "title": "Navy Blue Lightweight Sports Shoes",
            "price": 1699,
            "image": "https://i.pinimg.com/736x/ae/c9/e7/aec9e7904c783c209f435fea23ee2ba7.jpg"
        },
        {
            "id": 12,
            "title": "Red & White Running Shoes",
            "price": 1899,
            "image": "https://i.pinimg.com/736x/b1/0c/83/b10c8378c4750317d56cec7e61a50575.jpg"
        },
        {
            "id": 13,
            "title": "Black Slip-on Loafers",
            "price": 1499,
            "image": "https://i.pinimg.com/736x/b1/61/9e/b1619ef3dde200c68d58efc37b2d2d98.jpg"
        },
        {
            "id": 14,
            "title": "Premium Leather Oxford Shoes",
            "price": 3499,
            "image": "https://i.pinimg.com/736x/56/3f/c2/563fc23b411a54e58038fda3d007e7ff.jpg"
        },
        {
            "id": 15,
            "title": "Streetwear Colourful Sneakers",
            "price": 2499,
            "image": "	https://i.pinimg.com/736x/0f/83/6b/0f836b82c9cd202a751bcb29f9f1ac67.jpg"
        },
        {
            "id": 16,
            "title": "Beige Casual Slip-ons",
            "price": 1299,
            "image": "https://i.pinimg.com/736x/17/d6/c2/17d6c226af8959a9c6d72c328cef5d4d.jpg"
        },
        {
            "id": 17,
            "title": "Black Leather Boots",
            "price": 3799,
            "image": "https://img.fantaskycdn.com/762df6810afe17752efc8bdfee43663e.jpeg"
        },
        {
            "id": 18,
            "title": "Grey Stylish Sneakers",
            "price": 2299,
            "image": "https://i.pinimg.com/736x/bd/ee/19/bdee19d10680603ae7cc1b2381b66b35.jpg"
        },
        {
            "id": 19,
            "title": "White Premium Mesh Sneakers",
            "price": 2399,
            "image": "https://i.pinimg.com/736x/b1/0c/83/b10c8378c4750317d56cec7e61a50575.jpg"
        },
        {
            "id": 20,
            "title": "Leather Slip-On Moccasins",
            "price": 2799,
            "image": "https://i.pinimg.com/736x/ae/c9/e7/aec9e7904c783c209f435fea23ee2ba7.jpg"
        }
    ]
    const product = shoes.find((item) => item.id === Number(id))

    const addToHandleCart = () => {
        router.push('/cart')
        dispatch(addToCart(product))
    }
    if (!product) {
        return (
            <div style={{ marginTop: "150px" }}>
                <h2>
                    products not fount
                </h2>
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
