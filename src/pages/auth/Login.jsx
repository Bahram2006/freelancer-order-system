export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Welcome Back 👋
        </h2>

        <form className="space-y-4">
          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div>
            <label className="text-white text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-200 text-sm mt-4">
          Don’t have an account? Sign up
        </p>
      </div>
    </div>
  );
}
