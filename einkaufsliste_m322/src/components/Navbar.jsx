import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>Shopping<br />List</h1>
        <span>♡</span>
      </div>

      <nav className="navigation">
        <NavLink to="/products" className="nav-link">
          ◈
          <span>Products</span>
        </NavLink>

        <NavLink to="/" className="nav-link">
          ☷
          <span>Shopping List</span>
        </NavLink>

        <NavLink to="/add-product" className="nav-link">
          ＋
          <span>Add Product</span>
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <p>
          Remember<br />
          what to buy :D
        </p>

      </div>
    </aside>
  );
}

export default Navbar;