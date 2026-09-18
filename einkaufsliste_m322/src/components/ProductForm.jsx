function ProductForm() {
  return (
    <form>
      <div>
        <label>Image URL</label>
        <input type="text" />
      </div>

      <div>
        <label>Name</label>
        <input type="text" />
      </div>

      <div>
        <label>Quantity</label>
        <input type="number" min="1" />
      </div>

      <div>
        <label>Category</label>
        <input type="text" />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;