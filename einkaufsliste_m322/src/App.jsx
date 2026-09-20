import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ShoppingList from "./pages/ShoppingList";
import EditProduct from "./pages/EditProduct";

import "./App.css";

const initialProducts = [
  {
    id: 1,
    productTitle: "Ramen",
    category: "Food",
    imageUrl: "",
  },
  {
    id: 2,
    productTitle: "Mochi",
    category: "Food",
    imageUrl: "",
  },
  {
    id: 3,
    productTitle: "Demon Slayer",
    category: "Entertainment",
    imageUrl: "",
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [shoppingItems, setShoppingItems] = useState([]);

  function addProduct(newProduct) {
    setProducts((currentProducts) => [
      ...currentProducts,
      newProduct,
    ]);
  }

  function addToList(product, quantity) {
    const shoppingItem = {
      ...product,
      quantity: quantity,
      status: false,
      date: new Date().toISOString().split("T")[0],
    };

    setShoppingItems((currentItems) => [
      ...currentItems,
      shoppingItem,
    ]);

    console.log("Added to shopping list:", shoppingItem);
  }

  function deleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== productId
      )
    );
  }

  function editProduct(updatedProduct) {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  }

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />

        <main className="content">
          <Routes>

            <Route
              path="/"
              element={
                <ShoppingList
                  shoppingItems={shoppingItems}
                />
              }
            />

            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  onAddToList={addToList}
                  onDeleteProduct={deleteProduct}
                />
              }
            />

            <Route
              path="/add-product"
              element={
                <AddProduct
                  onAddProduct={addProduct}
                  onAddToList={addToList}
                />
              }
            />

            <Route
              path="/edit-product/:id"
              element={
                <EditProduct
                  products={products}
                  onEditProduct={editProduct}
                />
              }
            />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;