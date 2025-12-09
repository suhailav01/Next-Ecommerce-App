export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch FakeStore API" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return Response.json(data);

  } catch (err) {
    return Response.json(
      { error: "FakeStore API request failed" },
      { status: 500 }
    );
  }
}
