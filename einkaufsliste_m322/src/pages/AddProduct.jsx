import ProductForm from "../components/ProductForm";

function AddProduct({ onAddProduct, onAddToList }) {
  return (
    <div className="add-product-page">
      <div className="page-header">
        <h1>Add Product</h1>
        <p>Create a new product and add it to your shopping list.</p>
      </div>

      <ProductForm
        onAddProduct={onAddProduct}
        onAddToList={onAddToList}
      />
    </div>
  );
}

export default AddProduct;