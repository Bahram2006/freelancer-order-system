import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // 🔥 LOAD (ilk açylanda)
  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  // 🔥 SAVE (her üýtgände)
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ➕ ADD
  const addOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      { ...order, id: Date.now() },
    ]);
  };

  // ❌ DELETE
  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  // ✏️ UPDATE (edit üçin öňünden)
  const updateOrder = (updatedOrder) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === updatedOrder.id ? updatedOrder : o
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, deleteOrder, updateOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// 🔥 HOOK
export const useOrders = () => useContext(OrderContext);