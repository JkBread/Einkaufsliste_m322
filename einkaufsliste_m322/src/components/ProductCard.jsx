import { useState } from "react";

function ProductCard({ product, onAddToList }) {
  const [quantity, setQuantity] = useState(1);

  function handleAddToList() {
    console.log("Button clicked:", product.productTitle, quantity);
    onAddToList(product, quantity);
  }

  return (
    <div>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.productTitle}
          width="150"
        />
      )}

      <h2>{product.productTitle}</h2>
      <p>{product.category}</p>

      <div>
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
        >
          -
        </button>

        <span>{quantity}</span>

        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      <button onClick={handleAddToList}>
        Add to List
      </button>
    </div>
  );
}

export default ProductCard;