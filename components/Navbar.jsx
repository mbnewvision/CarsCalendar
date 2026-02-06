"use client";
import { useRouter } from "next/navigation";

export default function Navbar({ user }) {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">CarFlow 🚗</h1>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Déconnexion
      </button>
    </nav>
  );
}
