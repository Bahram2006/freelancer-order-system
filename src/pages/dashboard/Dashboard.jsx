import MainLayout from "../../layouts/MainLayout"

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">Orders: 12</div>
        <div className="bg-white p-4 rounded shadow">Clients: 5</div>
        <div className="bg-white p-4 rounded shadow">Revenue: $1200</div>
      </div>
    </MainLayout>
  )
}