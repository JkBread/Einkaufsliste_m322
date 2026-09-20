import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  onAddToList,
  onDeleteProduct,
}) {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function handleAddToList() {
    onAddToList(product, quantity);
  }

  function handleDelete() {
    onDeleteProduct(product.id);
  }

  function handleEdit() {
    navigate(`/edit-product/${product.id}`);
  }

  return (
    <div className="product-card">
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

      <div className="product-info">
        <h2>{product.productTitle}</h2>

        <span className="category">
          {product.category}
        </span>

        <div className="quantity">
          <button onClick={decreaseQuantity}>
            −
          </button>

          <span>{quantity}</span>

          <button onClick={increaseQuantity}>
            +
          </button>
        </div>

        <button
          className="add-button"
          onClick={handleAddToList}
        >
          Add to List
        </button>

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