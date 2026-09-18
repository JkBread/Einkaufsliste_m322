import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    {
      id: 1,
      productTitle: "Ramen",
      category: "Food",
      imageUrl: "",
    },
    {
      id: 2,
      productTitle: "Mochi",
      category: "Food",
      imageUrl: "",
    },
    {
      id: 3,
      productTitle: "Manga",
      category: "Entertainment",
      imageUrl: "",
    },
  ];

  const filteredProducts = products.filter((product) =>
  product.productTitle.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button>Add New Product</button>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Products;