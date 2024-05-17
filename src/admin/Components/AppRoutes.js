import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../Screens/Customers";
import Dashboard from "../Screens/Dashboard";
import Inventory from "../Screens/Inventory";
import Orders from "../Screens/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;