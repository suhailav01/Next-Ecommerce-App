import React from 'react'
import styles from '../products/products.module.css'
import  Link  from 'next/link'
export const metadata = {
  title: "Groceries list"
}
function Groceries() {
    let grocery = [
  {
    "id": 1,
    "title": "Basmati Rice 5Kg",
    "brand": "India Gate",
    "price": 12.99,
    "image": "https://i.pinimg.com/1200x/88/0e/1e/880e1e10ed6f6040238f468082ee15e2.jpg",
    "rating": 4.7
  },
  {
    "id": 2,
    "title": "Wheat Flour 5Kg",
    "brand": "Aashirvaad",
    "price": 9.49,
    "image": "https://i.pinimg.com/736x/37/86/dd/3786ddb393601f63bef23191e6eb9508.jpg",
    "rating": 4.6
  },
  {
    "id": 3,
    "title": "Sunflower Cooking Oil 1L",
    "brand": "Fortune",
    "price": 2.99,
    "image": "https://i.pinimg.com/736x/2e/e4/14/2ee4142c7b2be26a951fc4cdfaebc6f7.jpg",
    "rating": 4.5
  },
  {
    "id": 4,
    "title": "Organic Turmeric Powder 200g",
    "brand": "24 Mantra",
    "price": 1.49,
    "image": "https://i.pinimg.com/736x/73/9a/6a/739a6a01aa1c4999dcf10dea9afc97a1.jpg",
    "rating": 4.4
  },
  {
    "id": 5,
    "title": "Black Pepper Powder 100g",
    "brand": "Everest",
    "price": 1.99,
    "image": "https://i.pinimg.com/1200x/cd/e2/39/cde239804e6683f334b0b0d2fe4a712f.jpg",
    "rating": 4.5
  },
  {
    "id": 6,
    "title": "Instant Coffee 200g",
    "brand": "Nescafe",
    "price": 4.49,
    "image": "https://i.pinimg.com/736x/ef/e7/0e/efe70ec19517c678a491a752fa02b209.jpg",
    "rating": 4.7
  },
  {
    "id": 7,
    "title": "Tea Powder 500g",
    "brand": "Tata Tea",
    "price": 3.99,
    "image": "https://i.pinimg.com/736x/85/fa/55/85fa5586548fc65f8295df7a861d7c8d.jpg",
    "rating": 4.6
  },
  {
    "id": 8,
    "title": "White Sugar 1Kg",
    "brand": "Madhur",
    "price": 1.29,
    "image": "https://i.pinimg.com/736x/e0/30/58/e030588b9abe3584d575b6d95f3adcd8.jpg",
    "rating": 4.3
  },
  {
    "id": 9,
    "title": "Organic Honey 500g",
    "brand": "Dabur",
    "price": 4.99,
    "image": "	https://i.pinimg.com/736x/e0/30/58/e030588b9abe3584d575b6d95f3adcd8.jpg",
    "rating": 4.6
  },
  {
    "id": 10,
    "title": "Cornflakes Cereal 1Kg",
    "brand": "Kellogg's",
    "price": 5.49,
    "image": "https://i.pinimg.com/736x/0e/f5/42/0ef542373a362144a87780c361fdca72.jpg",
    "rating": 4.4
  },
  {
    "id": 11,
    "title": "Pasta 500g",
    "brand": "Barilla",
    "price": 2.29,
    "image": "https://i.pinimg.com/736x/00/0d/65/000d6589df9265b3e659704944fccd5f.jpg",
    "rating": 4.5
  },
  {
    "id": 12,
    "title": "Tomato Ketchup 950g",
    "brand": "Kissan",
    "price": 2.49,
    "image": "https://i.pinimg.com/736x/80/0e/1e/800e1ebd4092d928a46b99e582243c69.jpg",
    "rating": 4.4
  },
  {
    "id": 13,
    "title": "Peanut Butter 1Kg",
    "brand": "Pintola",
    "price": 6.99,
    "image": "https://i.pinimg.com/736x/e7/c5/c3/e7c5c36054866230e5672154fefca27f.jpg",
    "rating": 4.7
  },
  {
    "id": 14,
    "title": "Olive Oil 1L",
    "brand": "Figaro",
    "price": 9.99,
    "image": "https://i.pinimg.com/736x/d3/41/d6/d341d631f6be2a3d01080b3fd1d7d66f.jpg",
    "rating": 4.6
  },
  {
    "id": 15,
    "title": "Instant Noodles Pack of 12",
    "brand": "Maggi",
    "price": 3.99,
    "image": "https://i.pinimg.com/736x/60/dd/71/60dd71528209ebc059265a096a2a904c.jpg",
    "rating": 4.5
  },
  {
    "id": 16,
    "title": "Cashews 500g",
    "brand": "Happilo",
    "price": 7.49,
    "image": "https://i.pinimg.com/736x/b0/9e/7c/b09e7c5fb7ec836a7a26610f07123dd6.jpg",
    "rating": 4.8
  },
  {
    "id": 17,
    "title": "Almonds 500g",
    "brand": "Nutraj",
    "price": 6.99,
    "image": "https://i.pinimg.com/736x/db/e5/61/dbe561e6aa308055bdeb72517d3899e7.jpg",
    "rating": 4.7
  },
  {
    "id": 18,
    "title": "Toor Dal 1Kg",
    "brand": "Tata Sampann",
    "price": 2.49,
    "image": "https://i.pinimg.com/736x/85/fa/55/85fa5586548fc65f8295df7a861d7c8d.jpg",
    "rating": 4.4
  },
  {
    "id": 19,
    "title": "Gram Flour 1Kg",
    "brand": "24 Mantra",
    "price": 1.69,
    "image": "	https://i.pinimg.com/736x/29/94/46/29944658fd813603fb4c5bf3453b7386.jpg",
    "rating": 4.5
  },
  {
    "id": 20,
    "title": "Ghee 1L",
    "brand": "Amul",
    "price": 8.49,
    "image": "https://i.pinimg.com/736x/ef/e7/0e/efe70ec19517c678a491a752fa02b209.jpg",
    "rating": 4.8
  }
]

  return (
    <div style={{ marginTop: "140px" }} className={styles.container}>{grocery.map((p) => (
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
    
                        <Link href={`/gro/${p.id}`} state={{grocery:p}}>
                            <button className={styles.btn}>View Details</button>
                        </Link>
                    </div>
                </div>
            ))}
    
            </div>
  )
}

export default Groceries