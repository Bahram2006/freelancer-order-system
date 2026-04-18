import { Link, useLocation } from "react-router-dom"

export default function MainLayout({ children }) {
  const location = useLocation()

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
  ]

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          🚀 Freelancer CRM
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded transition ${
                location.pathname === item.path
                  ? "bg-gray-700"
                  : "hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <div className="h-16 bg-white shadow flex items-center justify-between px-6">
          <h1 className="font-semibold">Admin Panel</h1>
          <div>User</div>
        </div>

        {/* Page Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  )
}