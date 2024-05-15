import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/admin"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products/add"}>Add Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
