import MainLayout from "../../layouts/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold text-indigo-600">12</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Clients</p>
          <h2 className="text-2xl font-bold text-indigo-600">5</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold text-indigo-600">$1200</h2>
        </div>
      </div>
    </MainLayout>
  );
}
