import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../Screens/Customers";
import Dashboard from "../Screens/Dashboard";
import Inventory from "../Screens/Inventory";
import Orders from "../Screens/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin/" element={<Dashboard />}></Route>
      <Route path="/admin/inventory" element={<Inventory />}></Route>
      <Route path="/admin/orders" element={<Orders />}></Route>
      <Route path="/admin/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;