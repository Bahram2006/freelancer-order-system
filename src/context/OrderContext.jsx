import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, client: "John Doe", price: "$200", status: "Pending" },
          { id: 2, client: "Alice", price: "$350", status: "Completed" },
        ];
  });

  const addOrder = (order) => {
    setOrders((prev) => [...prev, { ...order, id: Date.now() }]);
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <OrderContext.Provider value={{ orders, addOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => useContext(OrderContext);
