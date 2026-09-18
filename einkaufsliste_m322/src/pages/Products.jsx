import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products({ products, onAddToList }) {
  const [searchTerm, setSearchTerm] = useState("");

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

      <Link to="/add-product">
        <button>Add New Product</button>
      </Link>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToList={onAddToList}
        />
      ))}
    </div>
  );
}

export default Products;