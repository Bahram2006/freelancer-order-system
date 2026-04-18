import { Link } from "react-router-dom"

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <nav className="flex flex-col gap-3">
          <Link to="/">Dashboard</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {children}
      </div>

    </div>
  )
}