import MainLayout from "../../layouts/MainLayout";
import { useOrders } from "../../context/OrderContext";

export default function Dashboard() {
  const { orders } = useOrders();

  const total = orders.length;
  const pending = orders.filter(o => o.status === "Pending").length;
  const completed = orders.filter(o => o.status === "Completed").length;

  const revenue = orders.reduce((acc, o) => {
    const num = parseFloat(o.price.replace("$", "")) || 0;
    return acc + num;
  }, 0);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <Card title="Total Orders" value={total} />
        <Card title="Pending" value={pending} />
        <Card title="Completed" value={completed} />
        <Card title="Revenue" value={`$${revenue}`} />

      </div>
    </MainLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="relative p-6 rounded-2xl text-white overflow-hidden
      bg-gradient-to-r from-indigo-500 to-purple-600
      shadow-lg hover:scale-105 transition duration-300">

      <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/10 rounded-full"></div>

      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}