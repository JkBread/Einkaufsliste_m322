import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct({ products, onEditProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (product) => String(product.id) === id
  );

  const [imageUrl, setImageUrl] = useState(
    product ? product.imageUrl : ""
  );

  const [name, setName] = useState(
    product ? product.productTitle : ""
  );

  const [category, setCategory] = useState(
    product ? product.category : ""
  );

  if (!product) {
    return (
      <div className="add-product-page">
        <h1>Product not found</h1>
      </div>
    );
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

    const updatedProduct = {
      ...product,
      productTitle: name,
      category: category,
      imageUrl: imageUrl,
    };

    onEditProduct(updatedProduct);

    navigate("/products");
  }

  return (
    <div className="add-product-page">

      <div className="page-header">
        <h1>Edit Product</h1>
        <p>
          Change the product information and save your changes.
        </p>
      </div>

      <form
        className="product-form"
        onSubmit={handleSubmit}
      >
        <div className="form-fields">

          <div className="image-options">

            <div className="form-group">
              <label>Image URL</label>

              <input
                type="text"
                value={
                  imageUrl.startsWith("data:")
                    ? ""
                    : imageUrl
                }
                onChange={(event) =>
                  setImageUrl(event.target.value)
                }
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
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Product name"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              required
            >
              <option value="">
                Select a category
              </option>

              <option value="Food">
                Food
              </option>

              <option value="Drinks">
                Drinks
              </option>

              <option value="Household">
                Household
              </option>

              <option value="Entertainment">
                Entertainment
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          <button
            className="primary-button"
            type="submit"
          >
            Save Changes
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
    </div>
  );
}

export default EditProduct;