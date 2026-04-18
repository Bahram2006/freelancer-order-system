import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MainLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 🔥 SIDEBAR */}
      <div className="w-64 bg-gray-950 text-gray-300 flex flex-col">
        <div
          onClick={() => navigate("/")}
          className="p-5 text-2xl font-bold text-white cursor-pointer"
        >
          🚀 StackTech
        </div>

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

        {/* 🔻 LOGOUT BUTTON */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="flex-1 flex flex-col">
        {/* TOPBAR */}
        <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
          <h1 className="font-semibold text-gray-700">
            Freelancer Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm">
              {user?.email}
            </span>

            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}