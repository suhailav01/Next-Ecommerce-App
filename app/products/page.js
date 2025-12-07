export const dynamic = "force-dynamic";

import Link from "next/link";
import styles from "../products/products.module.css";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div style={{ marginTop: "150px" }} className={styles.container}>
      {products?.map((p) => (
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

            <Link href={`/id/${p.id}`} className={`btn ${styles.btn}`}>
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
