import {Link, Outlet} from "react-router-dom";

export default function DataLayout() {
  return (
    <div>
      <h1>Data Layout</h1>

      <ul>
        <li>
          <Link to="/data">Data</Link>
        </li>

        <li>
          <Link to="/data/products">Products</Link>
        </li>

        <li>
          <Link to="/data/customers">Customers</Link>
        </li>

        <li>
          <Link to="/data/sellers">Sellers</Link>
        </li>
      </ul>

      <Outlet/>

    </div>
  );
}
