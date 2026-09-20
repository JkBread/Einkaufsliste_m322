import { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";

function Products({
  products,
  onAddToList,
  onDeleteProduct,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <img
        src={banner}
        alt="Purple sky banner"
        className="banner"
      />

      <div className="page-header">
        <h1>Products</h1>

        <p>
          Find your favourite items and add them to your
          shopping list.
        </p>
      </div>

      <div className="product-tools">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        <Link to="/add-product">
          <button className="primary-button">
            + Add New Product
          </button>
        </Link>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToList={onAddToList}
            onDeleteProduct={onDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;