"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../category/category.css";
export default function Category() {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategory(data);
    }
    getData();
  }, []);
   const click = (name) => {
    switch (name.toLowerCase()) {
      case "laptops":
        router.push("/laptops");
        break;
      case "beauty":
        router.push("/products");
        break;
      case "furniture":
        router.push("/furniture");
        break;
      case "groceries":
        router.push("/groceries")
        break;
      case "fragrances":
        router.push("/fragrances")
        break;
      case "home decoration":
        router.push("/home-decoration");
        break;
      case "mens shirts":
        router.push("/shirts")
        break;
      case "mens shoes":
        router.push("/shoes")
        break;
      case "mens watches":
        router.push("/watches")
        break;
      case "kitchen accessories":
        router.push("/kitchens")
        break;
      default:
        router.push("/products");
        break;
    }
  };

  // const click = (name: string) => {
  //   router.push(`${name}`);
  // };
  return (
    <div
      style={{ marginTop: "61px", width: "auto" }}
      className="clean-category-bar container-fluid d-flex justify-content-around align-items-center fixed-top"
    >
      {category?.slice(0, 10).map((p) => (
        <div onClick={() => click(p.name)} key={p.slug} className="clean-card">
          <span className="clean-text">{p.name}</span>
        </div>
      ))}
    </div>
  );
}
