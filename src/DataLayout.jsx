import {NavLink, Outlet} from "react-router-dom";
import "./data.css"

export default function DataLayout() {
  return (
    <div>
      <h1>Data Layout</h1>

      <ul>
        <li>
          <NavLink to="/data">Data</NavLink>
        </li>

        <li>
          <NavLink to="/data/customers">Customers</NavLink>
        </li>

        <li>
          <NavLink to={{
            pathname: "/data/products",
            search: "?category=shoes",
            hash: "#top"
          }}>Products</NavLink>
        </li>

        <li>
          <NavLink to="/data/sellers">Sellers</NavLink>
        </li>
      </ul>

      <Outlet/>

    </div>
  );
}
