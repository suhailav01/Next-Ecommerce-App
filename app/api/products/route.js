export async function GET(request) {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      return Response.json(
        { error: `Failed to fetch products: ${res.status}` },
        { status: res.status }
      );
    }

    const products = await res.json();
    return Response.json(products);
  } catch (error) {
    console.error("API products error:", error);
    return Response.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
