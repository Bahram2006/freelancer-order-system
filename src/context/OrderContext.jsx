import { createContext, useState } from "react";

// IMPORTANT: export ederis, sebäbi hook başga faýlda ulanýar
export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([
    { id: 1, client: "John Doe", price: "$200", status: "Pending" },
    { id: 2, client: "Alice", price: "$350", status: "Completed" },
  ]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev, { ...order, id: Date.now() }]);
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
