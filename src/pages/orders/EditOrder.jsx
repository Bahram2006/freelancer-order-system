import { useParams, useNavigate } from "react-router-dom";
import { useOrders } from "../../context/OrderContext";
import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import toast from "react-hot-toast";

export default function EditOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders, updateOrder } = useOrders();

  const order = orders.find((o) => o.id === Number(id));

  const [form, setForm] = useState({
    client: order?.client || "",
    price: order?.price || "",
    status: order?.status || "Pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateOrder({
      id: order.id,
      ...form,
    });

    navigate("/orders");

    updateOrder({
      id: order.id,
      ...form,
    });

    toast.success("Order updated ✏️");

    navigate("/orders");
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Edit Order</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow max-w-lg space-y-4"
      >
        <input
          name="client"
          value={form.client}
          onChange={handleChange}
          placeholder="Client"
          className="w-full p-3 border rounded-xl"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-3 border rounded-xl"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
          Update Order
        </button>
      </form>
    </MainLayout>
  );
}
