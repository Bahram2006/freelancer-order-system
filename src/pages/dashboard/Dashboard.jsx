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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
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
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}