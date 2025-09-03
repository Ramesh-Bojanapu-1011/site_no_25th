import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

import { useTranslation } from "react-i18next";
import Headder from "@/components/Headder";

const defaultLoginUser = {
  email: "riya.sharma@email.com",
  password: "password123",
  firstName: "Riya",
  lastName: "Sharma",
  registeredAt: "2024-01-15T00:00:00.000Z",
  lastLoginAt: "2024-08-21T12:00:00.000Z",
  lastLoginOut: null,
  lastLogin: "2024-08-21T12:00:00.000Z",
};

const defaultAllUsers = [
  {
    email: "riya.sharma@email.com",
    password: "password123",
    firstName: "Riya",
    lastName: "Sharma",
    registeredAt: "2024-01-15T00:00:00.000Z",
    lastLoginAt: "2024-08-21T12:00:00.000Z",
    lastLoginOut: null,
    lastLogin: "2024-08-21T12:00:00.000Z",
  },
];

const defaultBarData = [
  { date: "Aug 1", login: 3, logout: 2 },
  { date: "Aug 2", login: 4, logout: 3 },
  { date: "Aug 3", login: 2, logout: 1 },
  { date: "Aug 4", login: 5, logout: 4 },
  { date: "Aug 5", login: 3, logout: 2 },
];

const COLORS = ["#f59e42", "#fbbf24", "#f87171"];

type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  registeredAt: string;
  lastLoginAt: string;
  lastLoginOut: string | null;
  lastLogin: string | null;
  // Optionally, status?: string; role?: string;
};

// For new user structure, count by domain or just count all as 'User'
function getPieData(users: User[]): { name: string; value: number }[] {
  try {
    const currentUser = localStorage.getItem("Current User");
    let currentUserCount = 0;
    let otherUsersCount = 0;

    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      currentUserCount = users.filter(
        (u) => u.email === parsedUser.email,
      ).length;
    }

    otherUsersCount = users.length - currentUserCount;
    return [
      { name: "Current User", value: currentUserCount },
      { name: "Other Users", value: otherUsersCount },
    ];
  } catch (error) {
    console.error("Error getting pie chart data:", error);
    return [];
  }
}

const AdminDashboardPage = () => {
  // const [loginUser, setLoginUser] = useState(defaultLoginUser);
  const [allUsers, setAllUsers] = useState(defaultAllUsers);
  const [barData, setBarData] = useState(defaultBarData);
  const [pieData, setPieData] = useState(getPieData(defaultAllUsers));
  // console.log("Pie Data:", pieData);

  useEffect(() => {
    // Try to get from localStorage
    if (typeof window !== "undefined") {
      try {
        const user = localStorage.getItem("Current User");
        const users = localStorage.getItem("Users");

        // if (user) setLoginUser(JSON.parse(user));
        if (users) {
          const parsedUsers = JSON.parse(users);
          setAllUsers(parsedUsers);
          setPieData(getPieData(parsedUsers));

          // Calculate login/logout counts per weekday
          // Weekdays: Sun, Mon, Tue, Wed, Thu, Fri, Sat
          const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const loginCounts: Record<string, number> = {};
          const logoutCounts: Record<string, number> = {};
          weekDays.forEach((day) => {
            loginCounts[day] = 0;
            logoutCounts[day] = 0;
          });

          parsedUsers.forEach((u: User) => {
            if (u.lastLoginAt) {
              const d = new Date(u.lastLoginAt);
              const day = weekDays[d.getDay()];
              loginCounts[day] = (loginCounts[day] || 0) + 1;
            }
            if (u.lastLoginOut) {
              const d = new Date(u.lastLoginOut);
              const day = weekDays[d.getDay()];
              logoutCounts[day] = (logoutCounts[day] || 0) + 1;
            }
          });

          // Compose barData for the week (Sun-Sat)
          const newBarData = weekDays.map((day) => ({
            date: day,
            login: loginCounts[day],
            logout: logoutCounts[day],
          }));
          setBarData(newBarData);
          console.log("Bar Data:", newBarData); // Debugging line
        }
      } catch (e) {
        // fallback to defaults
      }
    }
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <Headder />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-white dark:from-yellow-900 dark:via-orange-900 dark:to-zinc-900 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 dark:text-yellow-400 mb-10 text-center drop-shadow-lg">
            {t("AdminDashboard_Title")}
          </h1>

          {/* Login User Details */}
          <div className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row gap-8 items-center border-2 border-orange-100 dark:border-yellow-900">
            {/* Pie Chart */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-lg font-bold text-orange-500 dark:text-yellow-300 mb-2">
                {t("AdminDashboard_Pie_Title")}
              </h3>
              <ResponsiveContainer width={220} height={220}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* All Users Table */}
          <div className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-8 mb-10 border-2 border-orange-100 dark:border-yellow-900 overflow-x-auto">
            <h2 className="text-2xl font-bold text-orange-600 dark:text-yellow-400 mb-4">
              {t("AdminDashboard_Users_Title")}
            </h2>
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 font-semibold text-orange-500 dark:text-yellow-300">
                    {t("AdminDashboard_Users_Col_Name")}
                  </th>
                  <th className="py-2 px-4 font-semibold text-orange-500 dark:text-yellow-300">
                    {t("AdminDashboard_Users_Col_Email")}
                  </th>

                  <th className="py-2 px-4 font-semibold text-orange-500 dark:text-yellow-300">
                    {t("AdminDashboard_Users_Col_RegisteredAt")}
                  </th>
                  <th className="py-2 px-4 font-semibold text-orange-500 dark:text-yellow-300">
                    {t("AdminDashboard_Users_Col_LastLogin")}
                  </th>
                  <th className="py-2 px-4 font-semibold text-orange-500 dark:text-yellow-300">
                    {t("AdminDashboard_Users_Col_Logout")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, idx) => (
                  <tr
                    key={user.email + idx}
                    className="border-b border-orange-100 dark:border-yellow-900 hover:bg-orange-50/40 dark:hover:bg-yellow-900/20 transition"
                  >
                    <td className="py-2 px-4">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.registeredAt}</td>
                    <td className="py-2 px-4">{user.lastLoginAt}</td>
                    <td className="py-2 px-4">
                      {user.lastLoginOut
                        ? user.lastLoginOut
                        : t("AdminDashboard_Users_NA")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Dual Bar Graph */}
          <div className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-8 border-2 border-orange-100 dark:border-yellow-900 mb-10">
            <h2 className="text-2xl font-bold text-orange-600 dark:text-yellow-400 mb-4">
              {t("AdminDashboard_Bar_Title")}
            </h2>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={barData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="login"
                  fill="#f59e42"
                  name={t("AdminDashboard_Bar_Login")}
                  barSize={32}
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="logout"
                  fill="#f87171"
                  name={t("AdminDashboard_Bar_Logout")}
                  barSize={32}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
