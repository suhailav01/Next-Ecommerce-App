import React from 'react'
import styles from '../products/products.module.css'
import  Link from 'next/link'
export const metadata = {
  title: "MensShirt list"
}
function MensShirt() {
    let shirt = 
   [
    {
      "id": 1,
      "title": "Classic White Formal Shirt",
      "price": 1199,
      "size": ["M", "L", "XL"],
      "image": "https://img.fantaskycdn.com/ee3c052b7d545b463ff0a277154de9b7.jpeg"
    },
    {
      "id": 2,
      "title": "Slim Fit Black Shirt",
      "price": 1299,
      "size": ["S", "M", "L"],
      "image": "https://i.pinimg.com/1200x/a5/79/06/a57906e26a0f0246a5a522b5be4d88f4.jpg"
    },
    {
      "id": 3,
      "title": "Blue Denim Casual Shirt",
      "price": 1499,
      "size": ["M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/92/a5/4b/92a54bf50b7d43de3500b283be91298b.jpg"
    },
    {
      "id": 4,
      "title": "Checked Cotton Shirt",
      "price": 999,
      "size": ["S", "M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/29/d1/bd/29d1bdb531b1929077cfc74329cfff04.jpg"
    },
    {
      "id": 5,
      "title": "Olive Green Casual Shirt",
      "price": 1099,
      "size": ["M", "L"],
      "image": "https://i.pinimg.com/736x/b1/2d/dd/b12ddd7f5e47d9f735680624c352b0e5.jpg"
    },
    {
      "id": 6,
      "title": "Sky Blue Formal Shirt",
      "price": 1190,
      "size": ["L", "XL"],
      "image": "https://i.pinimg.com/736x/0a/d2/5b/0ad25bd32bc71d69243915ef712cd646.jpg"
    },
    {
      "id": 7,
      "title": "Printed Summer Shirt",
      "price": 899,
      "size": ["S", "M", "L"],
      "image": "https://i.pinimg.com/736x/56/4c/c2/564cc258ef60696559a5ffffe2317a7d.jpg"
    },
    {
      "id": 8,
      "title": "Maroon Party Wear Shirt",
      "price": 1599,
      "size": ["M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/e1/15/32/e115322da1f909d7aee3c80a0885b41c.jpg"
    },
    {
      "id": 9,
      "title": "Grey Cotton Half Sleeve Shirt",
      "price": 749,
      "size": ["M", "L"],
      "image": "https://i.pinimg.com/736x/21/66/a7/2166a78c6c3a10733ee2f2a334e53fc7.jpg"
    },
    {
      "id": 10,
      "title": "Floral Printed Beach Shirt",
      "price": 999,
      "size": ["S", "M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/bb/d7/10/bbd710fa4a5cd0e3b0d8da4db3ee5cab.jpg"
    },
    {
      "id": 11,
      "title": "Navy Blue Formal Shirt",
      "price": 1399,
      "size": ["M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/71/fa/aa/71faaaa261fb9d277c80d37be196fe47.jpg"
    },
    {
      "id": 12,
      "title": "Casual Striped Shirt",
      "price": 1199,
      "size": ["S", "M", "L"],
      "image": "https://i.pinimg.com/736x/6b/9c/2e/6b9c2e4b70d5dada06e298fb2a71d11c.jpg"
    },
    {
      "id": 13,
      "title": "Brown Linen Shirt",
      "price": 1699,
      "size": ["M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/ab/9f/73/ab9f733e7d5d02e6433aca101b8fcf1a.jpg"
    },
    {
      "id": 14,
      "title": "Black & White Checked Shirt",
      "price": 999,
      "size": ["S", "M", "L"],
      "image": "https://i.pinimg.com/736x/23/eb/ba/23ebbaffd91a0c28e271ea9499bf5834.jpg"
    },
    {
      "id": 15,
      "title": "Casual Mandarin Collar Shirt",
      "price": 1299,
      "size": ["M", "L"],
      "image": "https://i.pinimg.com/736x/e8/1d/3c/e81d3ce563623e4698b64b5d7a1ef619.jpg"
    },
    {
      "id": 16,
      "title": "Beige Pure Cotton Shirt",
      "price": 1399,
      "size": ["M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/41/aa/c5/41aac58dcefadffd1366473e3fddab43.jpg"
    },
    {
      "id": 17,
      "title": "Teal Blue Slim Fit Shirt",
      "price": 1499,
      "size": ["S", "M", "L"],
      "image": "https://i.pinimg.com/736x/f0/ae/d3/f0aed307420957950e212fb9faf60d7c.jpg"
    },
    {
      "id": 18,
      "title": "Casual Red Checked Shirt",
      "price": 1049,
      "size": ["M", "L"],
      "image": "https://i.pinimg.com/736x/74/06/ff/7406ffe68f296b25cb19224669d544a2.jpg"
    },
    {
      "id": 19,
      "title": "White Linen Summer Shirt",
      "price": 1599,
      "size": ["M", "L", "XL"],
      "image": "https://i.pinimg.com/736x/2b/46/66/2b4666b4cdb78d4a7e29854b000ba55f.jpg"
    },
    {
      "id": 20,
      "title": "Royal Blue Party Wear Shirt",
      "price": 1699,
      "size": ["M", "L"],
      "image": "https://img.fantaskycdn.com/ee3c052b7d545b463ff0a277154de9b7.jpeg"
    }
  ]


  return (
    <div style={{ marginTop: "140px" }} className={styles.container}>{shirt.map((p) => (
                <div key={p.id} className={styles.card}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={p.image} alt={p.title} />
                    </div>
                    <div className={styles.details}>
                        <h4 className={styles.title}>{p.title.slice(0, 16)}...</h4>
                        <p className={styles.category}>{p.category}</p>
    
                        <div className={styles.ratingBox}>
                            <span className={styles.count}>({p.size} reviews)</span>
                        </div>
    
                        <Link href={`/shirt/${p.id}`}state={{shirt:p}}>
                            <button className={styles.btn}>View Details</button>
                        </Link>
                    </div>
                </div>
            ))}
    
            </div>
  )
}

export default MensShirt