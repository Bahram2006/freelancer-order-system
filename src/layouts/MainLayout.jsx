import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition">
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

        {/* 🔻 LOGOUT */}
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
        <div className="h-16 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex items-center justify-between px-6 shadow-sm transition">
          <h1 className="font-semibold text-gray-700 dark:text-gray-200">
            Freelancer Dashboard
          </h1>

          <div className="flex items-center gap-4">
            {/* 🌙 THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:scale-105 transition"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>

            {/* 👤 USER */}
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              {user?.email}
            </span>

            <div className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto flex-1 text-gray-800 dark:text-gray-100 transition">
          {children}
        </div>
      </div>
    </div>
  );
}