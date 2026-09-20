import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


// -------------------- EDIT PRODUCT PAGE --------------------

function EditProduct({ products, onEditProduct }) {

  // -------------------- GET PRODUCT ID --------------------

  const { id } = useParams();
  const navigate = useNavigate();


  // -------------------- FIND PRODUCT --------------------

  const product = products.find(
    (product) => String(product.id) === id
  );


  // -------------------- FORM STATES --------------------

  const [imageUrl, setImageUrl] = useState(
    product ? product.imageUrl : ""
  );

  const [name, setName] = useState(
    product ? product.productTitle : ""
  );

  const [category, setCategory] = useState(
    product ? product.category : ""
  );


  // -------------------- PRODUCT NOT FOUND --------------------

  if (!product) {
    return (
      <div className="add-product-page">
        <h1>Product not found</h1>
      </div>
    );
  }


  // -------------------- IMAGE UPLOAD --------------------

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


  // -------------------- REMOVE IMAGE --------------------

  function removeImage() {
    setImageUrl("");
  }


  // -------------------- SAVE CHANGES --------------------

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


  // -------------------- PAGE --------------------

  return (
    <div className="add-product-page">


      {/* -------------------- PAGE TITLE -------------------- */}

      <div className="page-header">
        <h1>Edit Product</h1>

        <p>
          Change the product information and save your changes.
        </p>
      </div>


      {/* -------------------- EDIT FORM -------------------- */}

      <form
        className="product-form"
        onSubmit={handleSubmit}
      >

        <div className="form-fields">


          {/* -------------------- IMAGE OPTIONS -------------------- */}

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


            {/* -------------------- UPLOAD IMAGE -------------------- */}

            <div className="form-group">
              <label>Upload Image</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>

          </div>


          {/* -------------------- REMOVE IMAGE -------------------- */}

          {imageUrl && (
            <button
              type="button"
              className="remove-image-button"
              onClick={removeImage}
            >
              Remove Image
            </button>
          )}


          {/* -------------------- PRODUCT NAME -------------------- */}

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


          {/* -------------------- CATEGORY -------------------- */}

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


          {/* -------------------- SAVE BUTTON -------------------- */}

          <button
            className="primary-button"
            type="submit"
          >
            Save Changes
          </button>

        </div>


        {/* -------------------- IMAGE PREVIEW -------------------- */}

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