import { useState } from "react"
import MainLayout from "../../layouts/MainLayout"

export default function CreateOrder() {
  const [form, setForm] = useState({
    client: "",
    price: "",
    status: "Pending",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("New Order:", form)

    // soň backend-e ibereris
    alert("Order created 🚀")
  }

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Order
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow max-w-lg space-y-4"
      >

        {/* Client */}
        <div>
          <label className="block text-gray-600 mb-1">Client Name</label>
          <input
            type="text"
            name="client"
            value={form.client}
            onChange={handleChange}
            placeholder="Enter client name"
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-600 mb-1">Price</label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="$100"
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-gray-600 mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Create Order
        </button>

      </form>
    </MainLayout>
  )
}