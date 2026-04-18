import { Link, useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-950 text-gray-300 flex flex-col">
        <div className="p-5 text-2xl font-bold text-white">✨ StackTech</div>

        <nav className="flex-1 px-3 space-y-2">
          {menu.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-xl transition-all duration-200 ${
                  active
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h1 className="font-semibold text-gray-700">Freelancer Dashboard</h1>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full">
              U
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
