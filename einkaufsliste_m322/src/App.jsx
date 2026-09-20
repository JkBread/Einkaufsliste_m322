import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ShoppingList from "./pages/ShoppingList";

function App() {
  const [products, setProducts] = useState([
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
      category: "Manga",
      imageUrl: "",
    },
  ]);

  const [shoppingItems, setShoppingItems] = useState([]);

  function addProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function addToList(product, quantity) {
    const newShoppingItem = {
      ...product,
      id: crypto.randomUUID(),
      quantity: quantity,
      status: false,
      date: new Date().toISOString().split("T")[0],
    };

    console.log("Added to shopping list:", newShoppingItem);

    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ShoppingList shoppingItems={shoppingItems} />}
        />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              onAddToList={addToList}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;