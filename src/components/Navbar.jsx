import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold text-indigo-600 cursor-pointer"
      >
        Freelance CRM
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          {user?.email}
        </span>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}