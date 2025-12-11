import Link from "next/link";
import styles from "../products/products.module.css";

export default async function Products() {
  try {
    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();
    const products = data.products;

    if (!Array.isArray(products) || products.length === 0) {
      return <div>No products found</div>;
    }

    return (
      <div className={styles.container} style={{ marginTop: "150px" }}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img className={styles.image} src={p.thumbnail} alt={p.title} />
            </div>

            <div className={styles.details}>
              <h4 className={styles.title}>{p.title.slice(0, 16)}...</h4>
              <p className={styles.category}>{p.category}</p>

              <div className={styles.ratingBox}>
                <span className={styles.rating}>{p.rating} ⭐</span>
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
    return <div>Error loading products</div>;
  }
}
