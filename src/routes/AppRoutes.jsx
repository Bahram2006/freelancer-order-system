import { Routes, Route } from "react-router-dom"

import Login from "../pages/auth/Login"
import Dashboard from "../pages/dashboard/Dashboard"
import OrdersList from "../pages/orders/OrdersList"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<OrdersList />} />
    </Routes>
  )
}