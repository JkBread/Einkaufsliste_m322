import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;