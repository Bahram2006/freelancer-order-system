import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { OrderProvider } from "./context/OrderContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <OrderProvider>
        <App />
        <Toaster position="top-right" />
      </OrderProvider>
    </AuthProvider>
  </BrowserRouter>
);