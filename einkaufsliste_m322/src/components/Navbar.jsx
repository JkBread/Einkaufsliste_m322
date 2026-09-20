import { NavLink } from "react-router-dom";


// -------------------- NAVBAR / SIDEBAR --------------------

function Navbar() {

  return (
    <aside className="sidebar">


      {/* -------------------- LOGO -------------------- */}

      <div className="logo">
        <h1>Shopping</h1>
        <span>List ♡</span>
      </div>


      {/* -------------------- NAVIGATION -------------------- */}

      <nav className="navigation">

        {/* Products */}
        <NavLink
          to="/products"
          className="nav-link"
        >
          ◇ Products
        </NavLink>


        {/* Shopping List */}
        <NavLink
          to="/"
          className="nav-link"
        >
          ☷ Shopping List
        </NavLink>


        {/* Add Product */}
        <NavLink
          to="/add-product"
          className="nav-link"
        >
          ＋ Add Product
        </NavLink>

      </nav>
    </aside>
  );
}

export default Navbar;