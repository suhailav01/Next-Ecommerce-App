import React from 'react'
import styles from '../products/products.module.css'
import  Link  from 'next/link'
function KitchenAccessories() {
    let kitchen = [
    {
      "id": 1,
      "title": "Stainless Steel Knife Set",
      "price": 1299,
      "image": "https://images.pexels.com/photos/1271940/pexels-photo-1271940.jpeg"
    },
    {
      "id": 2,
      "title": "Non-stick Frying Pan",
      "price": 999,
      "image": "https://images.pexels.com/photos/34802115/pexels-photo-34802115.jpeg"
    },
    {
      "id": 3,
      "title": "Glass Spice Jar Set",
      "price": 799,
      "image": "https://images.pexels.com/photos/34794673/pexels-photo-34794673.jpeg"
    },
    {
      "id": 4,
      "title": "Electric Kettle 1.5L",
      "price": 1599,
      "image": "https://images.pexels.com/photos/34761316/pexels-photo-34761316.jpeg"
    },
    {
      "id": 5,
      "title": "Wooden Cutting Board",
      "price": 499,
      "image": "https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg"
    },
    {
      "id": 6,
      "title": "Stainless Steel Cooking Pot",
      "price": 1399,
      "image": "https://images.pexels.com/photos/4740585/pexels-photo-4740585.jpeg"
    },
    {
      "id": 7,
      "title": "Silicone Spatula Set",
      "price": 599,
      "image": "https://images.pexels.com/photos/6301185/pexels-photo-6301185.jpeg"
    },
    {
      "id": 8,
      "title": "Airtight Food Storage Containers",
      "price": 899,
      "image": "https://images.pexels.com/photos/5644353/pexels-photo-5644353.jpeg"
    },
    {
      "id": 9,
      "title": "Manual Vegetable Chopper",
      "price": 749,
      "image": "https://images.pexels.com/photos/6021777/pexels-photo-6021777.jpeg"
    },
    {
      "id": 10,
      "title": "Premium Rolling Pin",
      "price": 399,
      "image": "https://images.pexels.com/photos/3505699/pexels-photo-3505699.jpeg"
    },
    {
      "id": 11,
      "title": "Oil Dispenser Bottle",
      "price": 349,
      "image": "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg"
    },
    {
      "id": 12,
      "title": "Stainless Steel Lunch Box",
      "price": 849,
      "image": "https://images.pexels.com/photos/5824485/pexels-photo-5824485.jpeg"
    },
    {
      "id": 13,
      "title": "Electric Hand Blender",
      "price": 1799,
      "image": "https://images.pexels.com/photos/375468/pexels-photo-375468.jpeg"
    },
    {
      "id": 14,
      "title": "Microwave Safe Glass Bowls",
      "price": 999,
      "image": "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg"
    },
    {
      "id": 15,
      "title": "Stainless Steel Water Bottle",
      "price": 699,
      "image": "https://images.pexels.com/photos/6301183/pexels-photo-6301183.jpeg"
    },
    {
      "id": 16,
      "title": "Kitchen Utensil Holder",
      "price": 449,
      "image": "https://images.pexels.com/photos/6996085/pexels-photo-6996085.jpeg"
    },
    {
      "id": 17,
      "title": "Non-stick Tawa",
      "price": 1099,
      "image": "https://images.pexels.com/photos/11385964/pexels-photo-11385964.jpeg"
    },
    {
      "id": 18,
      "title": "Stainless Steel Strainer",
      "price": 299,
      "image": "https://images.pexels.com/photos/175745/pexels-photo-175745.jpeg"
    },
    {
      "id": 19,
      "title": "Silicone Baking Mat",
      "price": 599,
      "image": "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg"
    },
    {
      "id": 20,
      "title": "Measuring Cups & Spoons",
      "price": 399,
      "image": "https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg"
    }
  ]
  return (
     <div style={{ marginTop: "140px" }} className={styles.container}>{kitchen.map((p) => (
                <div key={p.id} className={styles.card}>
                    <div className={styles.imageBox}>
                        <img className={styles.image} src={p.image} alt={p.title} />
                    </div>
                    <div className={styles.details}>
                        <h4 className={styles.title}>{p.title.slice(0, 16)}...</h4>
    
                        <div className={styles.ratingBox}>
                            <span className={styles.rating}>{p.price} ⭐</span>
                        </div>
    
                        <Link href={`/kitchen/${p.id}`} state={{kitchen:p}}>
                            <button className={styles.btn}>View Details</button>
                        </Link>
                    </div>
                </div>
            ))}
    
            </div>
  )
}

export default KitchenAccessories