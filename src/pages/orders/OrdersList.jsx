import MainLayout from "../../layouts/MainLayout"

export default function OrdersList() {
  const orders = [
    { id: 1, client: "John Doe", price: "$200", status: "Pending" },
    { id: 2, client: "Alice", price: "$350", status: "Completed" },
    { id: 3, client: "Bob", price: "$120", status: "In Progress" },
  ]

  const statusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-600"
      case "Completed":
        return "bg-green-100 text-green-600"
      case "In Progress":
        return "bg-blue-100 text-blue-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition">
          + New Order
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Client</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50 transition">
                
                <td className="p-4 font-medium">#{order.id}</td>
                <td className="p-4">{order.client}</td>
                <td className="p-4">{order.price}</td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>

                <td className="p-4 space-x-2">
                  <button className="text-indigo-600 hover:underline">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </MainLayout>
  )
}