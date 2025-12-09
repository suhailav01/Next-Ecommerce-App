

import Link from "next/link";
import styles from "../products/products.module.css";

export default async function Products() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const products = await res.json();

    if (!Array.isArray(products) || products.length === 0) {
      return (
        <div style={{ marginTop: "150px", textAlign: "center" }} className={styles.container}>
          <p>No products available.</p>
        </div>
      );
    }

    return (
      <div style={{ marginTop: "150px" }} className={styles.container}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img className={styles.image} src={p.image} alt={p.title} />
            </div>

            <div className={styles.details}>
              <h4 className={styles.title}>{p.title.slice(0, 16)}...</h4>
              <p className={styles.category}>{p.category}</p>

              <div className={styles.ratingBox}>
                <span className={styles.rating}>{p.rating?.rate ?? "N/A"} ⭐</span>
                <span className={styles.count}>({p.rating?.count ?? 0} reviews)</span>
              </div>

              <Link href={`/id/${p.id}`} className={`btn ${styles.btn}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Products fetch error:", error);
    return (
      <div style={{ marginTop: "150px", textAlign: "center" }} className={styles.container}>
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  }
}
