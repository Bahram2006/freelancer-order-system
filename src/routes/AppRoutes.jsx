import { Routes, Route } from "react-router-dom";
import EditOrder from "../pages/orders/EditOrder";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import OrdersList from "../pages/orders/OrdersList";
import CreateOrder from "../pages/orders/CreateOrder";
import Register from "../pages/auth/Register";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<OrdersList />} />
      <Route path="/create-order" element={<CreateOrder />} />
      <Route path="/orders/edit/:id" element={<EditOrder />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
