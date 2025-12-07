import React from 'react'
import styles from '../products/products.module.css'
import Link from 'next/link'
function Laptops() {
    let laptops = [
  {
    "id": 1,
    "title": "Apple MacBook Air M2",
    "brand": "Apple",
    "price": 1099,
    "image": "https://i.pinimg.com/736x/8f/d6/31/8fd63137ab4dec90a79e3146caf407f3.jpg",
    "rating": 4.8
  },
  {
    "id": 2,
    "title": "Apple MacBook Pro 14",
    "brand": "Apple",
    "price": 1999,
    "image": "https://i.pinimg.com/736x/38/65/94/386594135756b1c8572b20991e9dd963.jpg",
    "rating": 4.9
  },
  {
    "id": 3,
    "title": "Dell XPS 13",
    "brand": "Dell",
    "price": 1299,
    "image": "https://i.pinimg.com/736x/6e/74/e4/6e74e4d50a650bf705fc20bf780bf7f7.jpg",
    "rating": 4.7
  },
  {
    "id": 4,
    "title": "Dell Inspiron 15 5000",
    "brand": "Dell",
    "price": 749,
    "image": "https://sprintally.com/static/uploads/2024/02/surface-laptop.jpg",
    "rating": 4.2
  },
  {
    "id": 5,
    "title": "HP Spectre x360",
    "brand": "HP",
    "price": 1399,
    "image": "	https://i.pinimg.com/736x/4b/4e/d1/4b4ed1dd817eb1023063e4852f9449f2.jpg",
    "rating": 4.6
  },
  {
    "id": 6,
    "title": "HP Pavilion 14",
    "brand": "HP",
    "price": 699,
    "image": "	https://i.pinimg.com/736x/61/62/ec/6162ec3b7d6df11165a60807c5465652.jpg",
    "rating": 4.3
  },
  {
    "id": 7,
    "title": "Lenovo ThinkPad X1 Carbon",
    "brand": "Lenovo",
    "price": 1599,
    "image": "https://i.pinimg.com/736x/cb/59/83/cb5983d542c9217e4b2dec859689d9f7.jpg",
    "rating": 4.8
  },
  {
    "id": 8,
    "title": "Lenovo IdeaPad Slim 3",
    "brand": "Lenovo",
    "price": 549,
    "image": "https://i.pinimg.com/736x/11/68/53/116853fd9f9420615eadd9e3800d33dc.jpg",
    "rating": 4.1
  },
  {
    "id": 9,
    "title": "Asus ROG Strix G15",
    "brand": "Asus",
    "price": 1499,
    "image": "https://i.pinimg.com/1200x/df/8b/c8/df8bc81afb3df8bafb18e5b11a02267b.jpg",
    "rating": 4.7
  },
  {
    "id": 10,
    "title": "Asus VivoBook 15",
    "brand": "Asus",
    "price": 599,
    "image": "	https://i.pinimg.com/1200x/1d/04/77/1d0477a44a7093f7016cb0fdaebf538d.jpg",
    "rating": 4.0
  },
  {
    "id": 11,
    "title": "Acer Nitro 5",
    "brand": "Acer",
    "price": 999,
    "image": "https://i.pinimg.com/1200x/ec/94/ae/ec94ae644c7085f895b41565839487d1.jpg",
    "rating": 4.5
  },
  {
    "id": 12,
    "title": "Acer Aspire 5",
    "brand": "Acer",
    "price": 499,
    "image": "https://i.pinimg.com/1200x/fc/9b/36/fc9b36400dd5d1d9e56ba3fcacb4734a.jpg",
    "rating": 4.1
  },
  {
    "id": 13,
    "title": "MSI GF63 Thin",
    "brand": "MSI",
    "price": 899,
    "image": "https://i.pinimg.com/736x/11/f5/77/11f5779ab72499a842ad470369b04d3b.jpg",
    "rating": 4.4
  },
  {
    "id": 14,
    "title": "MSI Stealth 15M",
    "brand": "MSI",
    "price": 1599,
    "image": "	https://i.pinimg.com/1200x/48/ef/bb/48efbb63318e2bd6d88f9df725ce1727.jpg",
    "rating": 4.6
  },
  {
    "id": 15,
    "title": "Samsung Galaxy Book3",
    "brand": "Samsung",
    "price": 999,
    "image": "	https://i.pinimg.com/736x/3d/38/42/3d3842ba6c7646c666b0b7b78133fa4b.jpg",
    "rating": 4.3
  },
  {
    "id": 16,
    "title": "Samsung Galaxy Book Odyssey",
    "brand": "Samsung",
    "price": 1299,
    "image": "https://i.pinimg.com/736x/51/41/2e/51412ef9c808c1ae89162a726026d211.jpg",
    "rating": 4.5
  },
  {
    "id": 17,
    "title": "Microsoft Surface Laptop 5",
    "brand": "Microsoft",
    "price": 1499,
    "image": "https://i.pinimg.com/736x/c2/a4/32/c2a432da79bbfd5fa53c152af0559a14.jpg",
    "rating": 4.7
  },
  {
    "id": 18,
    "title": "Microsoft Surface Go 3",
    "brand": "Microsoft",
    "price": 599,
    "image": "https://i.pinimg.com/736x/2c/74/6d/2c746dc1f5dcb60064e46e3ba65c01fe.jpg",
    "rating": 4.2
  },
  {
    "id": 19,
    "title": "Razer Blade 15",
    "brand": "Razer",
    "price": 1999,
    "image": "https://i.pinimg.com/736x/24/25/1c/24251c28c1fee5be179f77ac1b2b76d6.jpg",
    "rating": 4.8
  },
  {
    "id": 20,
    "title": "LG Gram 17",
    "brand": "LG",
    "price": 1699,
    "image": "https://i.pinimg.com/736x/11/68/53/116853fd9f9420615eadd9e3800d33dc.jpg",
    "rating": 4.6
  }
]

  return (
     <div style={{ marginTop: "140px" }} className={styles.container}>{laptops.map((p) => (
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

                    <Link href={`/lap/${p.id}`} state={{laptops:p}}>
                        <button className={styles.btn}>View Details</button>
                    </Link>
                </div>
            </div>
        ))}
        </div>
  )
}

export default Laptops