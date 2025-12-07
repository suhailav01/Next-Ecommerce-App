import ProductDetails from "../../components/ProductDetails";
import { notFound } from "next/navigation";

export default async function Products({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) return notFound();
  const product = await res.json();
  return (
    <ProductDetails product={product}/>
  )
}