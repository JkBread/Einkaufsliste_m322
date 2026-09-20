import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm({ onAddProduct, onAddToList }) {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      productTitle: name,
      quantity: Number(quantity),
      category: category,
      imageUrl: imageUrl,
      status: false,
      date: new Date().toISOString().split("T")[0],
    };

    onAddProduct(newProduct);
    onAddToList(newProduct, Number(quantity));

    navigate("/products");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />
      </div>

      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label>Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
      </div>

      <div>
        <label>Category</label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Drinks">Drinks</option>
          <option value="Household">Household</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;