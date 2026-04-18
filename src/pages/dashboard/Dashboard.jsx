import MainLayout from "../../layouts/MainLayout"

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">
        Dashboard 🚀
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          Orders: 12
        </div>

        <div className="bg-white p-4 shadow rounded">
          Clients: 5
        </div>

        <div className="bg-white p-4 shadow rounded">
          Revenue: $1200
        </div>
      </div>
    </MainLayout>
  )
}