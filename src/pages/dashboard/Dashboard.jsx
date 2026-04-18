import MainLayout from "../../layouts/MainLayout";
import { useOrders } from "../../context/OrderContext";

export default function Dashboard() {
  const { orders } = useOrders();

  // 📊 STATS
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((acc, order) => {
    const price = parseFloat(order.price.replace("$", "")) || 0;
    return acc + price;
  }, 0);

  const pending = orders.filter((o) => o.status === "Pending").length;
  const completed = orders.filter((o) => o.status === "Completed").length;

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard
      </h1>

      {/* 🔥 STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Orders */}
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {totalOrders}
          </p>
        </div>

        {/* Revenue */}
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm">Total Revenue</h2>
          <p className="text-3xl font-bold text-green-600">
            ${totalRevenue}
          </p>
        </div>

        {/* Pending */}
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm">Pending</h2>
          <p className="text-3xl font-bold text-yellow-500">
            {pending}
          </p>
        </div>

        {/* Completed */}
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 text-sm">Completed</h2>
          <p className="text-3xl font-bold text-blue-500">
            {completed}
          </p>
        </div>
      </div>

      {/* 🔥 RECENT ORDERS */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Recent Orders
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet</p>
        ) : (
          <div className="space-y-3">
            {orders.slice(-5).reverse().map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-medium">{order.client}</span>
                <span className="text-gray-500">{order.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}