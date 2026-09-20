import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductForm({ onAddProduct, onAddToList }) {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  function handleImageUrl(event) {
    setImageUrl(event.target.value);
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    setImageUrl("");
  }

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
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-fields">

        <div className="image-options">
          <div className="form-group">
            <label>Image URL</label>

            <input
              type="text"
              value={imageUrl.startsWith("data:") ? "" : imageUrl}
              onChange={handleImageUrl}
              placeholder="Enter image URL"
            />
          </div>

          <div className="form-group">
            <label>Upload Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        {imageUrl && (
          <button
            type="button"
            className="remove-image-button"
            onClick={removeImage}
          >
            Remove Image
          </button>
        )}

        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Product name"
            required
          />
        </div>

        <div className="form-group">
          <label>Quantity</label>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
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

        <button
          className="primary-button"
          type="submit"
        >
          Add Product
        </button>

      </div>

      <div className="image-preview">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Product preview"
          />
        ) : (
          <p>Image Preview</p>
        )}
      </div>
    </form>
  );
}

export default ProductForm;