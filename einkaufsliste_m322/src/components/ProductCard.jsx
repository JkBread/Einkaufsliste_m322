function ProductCard({ product }) {
  return (
    <div>
      <h2>{product.productTitle}</h2>
      <p>{product.category}</p>
      <button>Add</button>
    </div>
  );
}

export default ProductCard;