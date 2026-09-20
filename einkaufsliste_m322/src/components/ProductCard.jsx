import { useState } from "react";
import { useNavigate } from "react-router-dom";


// -------------------- PRODUCT CARD --------------------

function ProductCard({
  product,
  onAddToList,
  onDeleteProduct,
}) {

  // -------------------- QUANTITY --------------------

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();


  // -------------------- DECREASE QUANTITY --------------------

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }


  // -------------------- INCREASE QUANTITY --------------------

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }


  // -------------------- ADD TO SHOPPING LIST --------------------

  function handleAddToList() {
    onAddToList(product, quantity);
  }


  // -------------------- EDIT PRODUCT --------------------

  function handleEdit() {
    navigate(`/edit-product/${product.id}`);
  }


  // -------------------- DELETE PRODUCT --------------------

  function handleDelete() {
    onDeleteProduct(product.id);
  }


  // -------------------- PRODUCT CARD DESIGN --------------------

  return (
    <div className="product-card">

      {/* -------------------- PRODUCT IMAGE -------------------- */}

      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.productTitle}
          className="product-image"
        />
      ) : (
        <div className="product-image no-image">
          No image
        </div>
      )}


      {/* -------------------- PRODUCT INFORMATION -------------------- */}

      <div className="product-info">

        <h2>{product.productTitle}</h2>

        <span className="category">
          {product.category}
        </span>


        {/* -------------------- QUANTITY BUTTONS -------------------- */}

        <div className="quantity">

          <button onClick={decreaseQuantity}>
            −
          </button>

          <span>{quantity}</span>

          <button onClick={increaseQuantity}>
            +
          </button>

        </div>


        {/* -------------------- ADD TO LIST BUTTON -------------------- */}

        <button
          className="add-button"
          onClick={handleAddToList}
        >
          Add to List
        </button>


        {/* -------------------- EDIT AND DELETE -------------------- */}

        <div className="product-edit-buttons">

          <button
            className="edit-product-button"
            onClick={handleEdit}
          >
            Edit
          </button>

          <button
            className="delete-product-button"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;