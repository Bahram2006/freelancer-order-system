import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { OrderProvider } from "./context/OrderContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OrderProvider>
      <App />
      <Toaster position="top-right" />  
    </OrderProvider>
  </BrowserRouter>,
);
