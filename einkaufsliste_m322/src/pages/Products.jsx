import { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";


// -------------------- PRODUCTS PAGE --------------------

function Products({
  products,
  onAddToList,
  onDeleteProduct,
}) {

  // -------------------- SEARCH --------------------

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  // -------------------- PAGE --------------------

  return (
    <div className="products-page">

      {/* -------------------- BANNER -------------------- */}

      <img
        src={banner}
        alt="Purple sky banner"
        className="banner"
      />


      {/* -------------------- TITLE -------------------- */}

      <div className="page-header">
        <h1>Products</h1>

        <p>
          Find your favourite items and add them to your
          shopping list.
        </p>
      </div>


      {/* -------------------- SEARCH AND ADD PRODUCT -------------------- */}

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


      {/* -------------------- PRODUCT LIST -------------------- */}

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