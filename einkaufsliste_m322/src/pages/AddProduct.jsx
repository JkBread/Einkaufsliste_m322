import ProductForm from "../components/ProductForm";


// -------------------- ADD PRODUCT PAGE --------------------

function AddProduct({ onAddProduct, onAddToList }) {

  return (
    <div className="add-product-page">


      {/* -------------------- PAGE TITLE -------------------- */}

      <div className="page-header">
        <h1>Add Product</h1>

        <p>
          Create a new product and add it to your shopping list.
        </p>
      </div>


      {/* -------------------- PRODUCT FORM -------------------- */}

      <ProductForm
        onAddProduct={onAddProduct}
        onAddToList={onAddToList}
      />

    </div>
  );
}

export default AddProduct;