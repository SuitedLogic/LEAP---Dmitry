"use client";

import { useAuthentication } from "@/hooks/authentication.hook";
import { useFetchUser } from "@/hooks/fetchUser.hook";
import { useRouter } from "next/navigation";
import { Header } from "./components/Header";
import { UsersTable } from "./components/UsersTable";
import { User } from "./types";

export default function Dashboard() {
  const { users, loading, error } = useFetchUser();
  const { logout } = useAuthentication();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={handleLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10">
        {loading && <div className="p-4">Loading...</div>}
        {error && (
          <div className="p-4 text-red-600">Error: {error.message}</div>
        )}
        {!loading && !error && <UsersTable users={users as User[]} />}
      </main>
    </div>
  );
}
