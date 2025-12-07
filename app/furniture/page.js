import React from 'react'
import styles from '../Products/products.module.css'
import  Link  from 'next/link'
function Furniture() {
  let furniture = [
    {
      "id": 1,
      "title": "Modern Wooden Dining Table",
      "brand": "UrbanWood",
      "price": 249.99,
      "image": "https://i.pinimg.com/736x/f7/ec/dd/f7ecddb1cd0f3a5185226a5d2f5c1b6b.jpg",
      "rating": 4.7
    },
    {
      "id": 2,
      "title": "Ergonomic Office Chair",
      "brand": "Featherlite",
      "price": 129.99,
      "image": "https://i.pinimg.com/736x/2c/c9/91/2cc9919413f415df9802474e692e261a.jpg",
      "rating": 4.6
    },
    {
      "id": 3,
      "title": "King Size Bed Frame",
      "brand": "Wakefit",
      "price": 399.99,
      "image": "https://i.pinimg.com/736x/87/ef/e6/87efe6543c2b22d00bee45ca498c8b01.jpg",
      "rating": 4.8
    },
    {
      "id": 4,
      "title": "Three-Seater Sofa",
      "brand": "HomeCentre",
      "price": 299.99,
      "image": "https://i.pinimg.com/1200x/50/68/90/506890beb823ab58d32cf71d101355dd.jpg",
      "rating": 4.5
    },
    {
      "id": 5,
      "title": "Smart Study Desk",
      "brand": "Nilkamal",
      "price": 89.99,
      "image": "https://i.pinimg.com/736x/f4/a7/b4/f4a7b40f2080aea8761771a80b9be78a.jpg",
      "rating": 4.2
    },
    {
      "id": 6,
      "title": "Bookshelf With 5 Shelves",
      "brand": "Ikea",
      "price": 79.99,
      "image": "	https://i.pinimg.com/736x/ff/5d/57/ff5d5732bb11ec3f6cf201ae4af9106a.jpg",
      "rating": 4.4
    },
    {
      "id": 7,
      "title": "Recliner Chair",
      "brand": "Godrej Interio",
      "price": 199.99,
      "image": "https://i.pinimg.com/736x/69/8e/e3/698ee35871486deb672d67dd135c8b7b.jpg",
      "rating": 4.6
    },
    {
      "id": 8,
      "title": "Wooden Coffee Table",
      "brand": "Urban Ladder",
      "price": 59.99,
      "image": "https://i.pinimg.com/1200x/91/73/45/917345795802258ca995b65f8d6b17c6.jpg",
      "rating": 4.3
    },
    {
      "id": 9,
      "title": "Shoe Rack Cabinet",
      "brand": "Ikea",
      "price": 49.99,
      "image": "https://i.pinimg.com/736x/0a/45/39/0a45396520c24b9aeacc01c1a0f5319f.jpg",
      "rating": 4.1
    },
    {
      "id": 10,
      "title": "Wardrobe 3-Door",
      "brand": "Durian",
      "price": 299.99,
      "image": "https://i.pinimg.com/1200x/e1/4d/fc/e14dfcae2a4dc0ec39943fe8661d23f7.jpg",
      "rating": 4.5
    },
    {
      "id": 11,
      "title": "Glass Top Centre Table",
      "brand": "HomeTown",
      "price": 89.99,
      "image": "https://i.pinimg.com/1200x/c8/61/69/c86169f2579f369fd39ac9063a06fc2c.jpg",
      "rating": 4.2
    },
    {
      "id": 12,
      "title": "Kids Study Table",
      "brand": "Pepperfry",
      "price": 69.99,
      "image": "https://i.pinimg.com/736x/f6/d6/eb/f6d6eb56ddce46e989623acbe319cd47.jpg",
      "rating": 4.0
    },
    {
      "id": 13,
      "title": "Luxury Sofa Set",
      "brand": "Godrej Interio",
      "price": 499.99,
      "image": "	https://i.pinimg.com/1200x/b0/62/de/b062deca9db59fb3d45025a34fd396a2.jpg",
      "rating": 4.7
    },
    {
      "id": 14,
      "title": "Wooden Dressing Table",
      "brand": "UrbanWood",
      "price": 159.99,
      "image": "https://i.pinimg.com/736x/44/1a/9a/441a9ac9152892a54b38225b5dffc965.jpg",
      "rating": 4.4
    },
    {
      "id": 15,
      "title": "Queen Size Mattress",
      "brand": "Sleepwell",
      "price": 199.99,
      "image": "https://i.pinimg.com/736x/80/10/85/80108578212cf5364ec8c811f5943059.jpg",
      "rating": 4.6
    },
    {
      "id": 16,
      "title": "Office Workstation Table",
      "brand": "Nilkamal",
      "price": 119.99,
      "image": "https://i.pinimg.com/736x/79/5d/2d/795d2da6a2c1e1cee081eb1464ff5522.jpg",
      "rating": 4.3
    },
    {
      "id": 17,
      "title": "Round Wooden Stool",
      "brand": "Ikea",
      "price": 24.99,
      "image": "https://i.pinimg.com/736x/79/5d/2d/795d2da6a2c1e1cee081eb1464ff5522.jpg",
      "rating": 4.2
    },
    {
      "id": 18,
      "title": "Foldable Dining Set",
      "brand": "Home Centre",
      "price": 189.99,
      "image": "https://i.pinimg.com/736x/42/75/9c/42759c2a6ee309345f787afb6eeb7ae0.jpg",
      "rating": 4.5
    },
    {
      "id": 19,
      "title": "Premium Office Desk Chair",
      "brand": "GreenSoul",
      "price": 149.99,
      "image": "https://i.pinimg.com/1200x/ca/35/fd/ca35fd4ff7274bdae8b7afdcf0642805.jpg",
      "rating": 4.6
    },
    {
      "id": 20,
      "title": "TV Entertainment Unit",
      "brand": "Durian",
      "price": 229.99,
      "image": "	https://i.pinimg.com/1200x/b0/62/de/b062deca9db59fb3d45025a34fd396a2.jpg",
      "rating": 4.4
    }
  ]

  return (
    <div style={{ marginTop: "140px" }} className={styles.container}>{furniture.map((p) => (
      <div key={p.id} className={styles.card}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={p.image} alt={p.title} />
        </div>
        <div className={styles.details}>
          <h4 className={styles.title}>{p.title.slice(0, 16)}...</h4>
          <p className={styles.category}>{p.category}</p>

          <div className={styles.ratingBox}>
            <span className={styles.rating}>{p.rating.rate} ⭐</span>
            <span className={styles.count}>({p.rating.count} reviews)</span>
          </div>

          <Link href={`/fur/${p.id}`} state={{furniture:p}}>
            <button className={styles.btn}>View Details</button>
          </Link>
        </div>
      </div>
    ))}

    </div>
  )
}

export default Furniture