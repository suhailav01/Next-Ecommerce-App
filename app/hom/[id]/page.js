"use client"
import { addToCart } from '../../Redux/cartSlice';
import { useRouter } from 'next/navigation';
import React, { use } from 'react'
import { useDispatch } from 'react-redux';

export default function page(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const params = use(props.params);
    const { id } = params;
    let Home = [
        {
            "id": 1,
            "title": "Modern Wall Clock",
            "price": 1299,
            "image": "https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg"
        },
        {
            "id": 2,
            "title": "Wooden Photo Frame Set",
            "price": 899,
            "image": "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg"
        },
        {
            "id": 3,
            "title": "LED Decorative Table Lamp",
            "price": 1799,
            "image": "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg"
        },
        {
            "id": 4,
            "title": "Golden Flower Vase",
            "price": 1599,
            "image": "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg"
        },
        {
            "id": 5,
            "title": "Cotton Cushion Cover Set",
            "price": 499,
            "image": "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg"
        },
        {
            "id": 6,
            "title": "Vintage Table Clock",
            "price": 1399,
            "image": "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg"
        },
        {
            "id": 7,
            "title": "Abstract Canvas Painting",
            "price": 2199,
            "image": "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
        },
        {
            "id": 8,
            "title": "Metal Wall Art",
            "price": 2499,
            "image": "https://images.pexels.com/photos/34835428/pexels-photo-34835428.jpeg"
        },
        {
            "id": 9,
            "title": "Decorative Ceramic Pot",
            "price": 999,
            "image": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg"
        },
        {
            "id": 10,
            "title": "Hanging Pendant Light",
            "price": 2999,
            "image": "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg"
        },
        {
            "id": 11,
            "title": "Artificial Plant with Pot",
            "price": 799,
            "image": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
        },
        {
            "id": 12,
            "title": "Bohemian Macrame Wall Hanging",
            "price": 1299,
            "image": "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg"
        },
        {
            "id": 13,
            "title": "Decorative Scented Candles",
            "price": 699,
            "image": "https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg"
        },
        {
            "id": 14,
            "title": "Handmade Jute Basket",
            "price": 599,
            "image": "https://images.pexels.com/photos/34860149/pexels-photo-34860149.jpeg"
        },
        {
            "id": 15,
            "title": "Marble Showpiece Elephant",
            "price": 1499,
            "image": "https://images.pexels.com/photos/4030908/pexels-photo-4030908.jpeg"
        },
        {
            "id": 16,
            "title": "Wall Mirror Decorative Frame",
            "price": 1899,
            "image": "https://images.pexels.com/photos/34823989/pexels-photo-34823989.jpeg"
        },
        {
            "id": 17,
            "title": "Luxury Table Runner",
            "price": 899,
            "image": "https://images.pexels.com/photos/34847270/pexels-photo-34847270.jpeg"
        },
        {
            "id": 18,
            "title": "Mini Indoor Fountain",
            "price": 3499,
            "image": "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
        },
        {
            "id": 19,
            "title": "Designer Wall Shelves",
            "price": 2199,
            "image": "https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg"
        },
        {
            "id": 20,
            "title": "Wooden Candle Holder",
            "price": 649,
            "image": "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg"
        }
    ]
    const product = Home.find((item) => item.id === Number(id))

    const addToHandleCart =()=>{
        router.push('/cart')
        dispatch(addToCart(product))
    }
    if (!product) {
        return (
            <div style={{ marginTop: "150px" }}>
                <h2>product not fount</h2>
            </div>
        )
    }
    return (
        <div
            style={{
                marginTop: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "40px",
            }}
        >
            {/* IMAGE */}
            <div>
                <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "350px", borderRadius: "10px" }}
                />
            </div>

            {/* DETAILS */}
            <div>
                <h1>{product.title}</h1>
                <h3>Brand: {product.brand}</h3>
                <h2 style={{ color: "green" }}>${product.price}</h2>
                <p style={{ fontSize: "20px" }}>⭐ {product.rating}</p>

                <button
                onClick={addToHandleCart}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "8px",
                        border: "none",
                        marginTop: "15px",
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}
