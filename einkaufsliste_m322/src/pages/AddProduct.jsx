import ProductForm from "../components/ProductForm";

function AddProduct({ onAddProduct, onAddToList }) {
  return (
    <div>
      <h1>Add Product</h1>

      <ProductForm
        onAddProduct={onAddProduct}
        onAddToList={onAddToList}
      />
    </div>
  );
}

export default AddProduct;