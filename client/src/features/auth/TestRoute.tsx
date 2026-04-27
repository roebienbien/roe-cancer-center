import { api } from "@/api/client";
import { useState } from "react";

export default function TestRoute() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  const handleLogin = async () => {
    const data = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    console.log("LOGIN RESPONSE:", data);

    localStorage.setItem("token", data.token);
  };

  const fetchAllUsers = async () => {
    const res = await api("/users")
    console.log("Users:", res)
    // setUsers(Array.isArray(data) ? data : data.data);
    setUsers(res)
  }

  // const fetchAllUsers = async () => {
  //   const res = await api("/users")
  //   console.log("Users:", res.data)
  //   // setUsers(Array.isArray(data) ? data : data.data);
  //   setUsers(res.data)
  // }

  const getBookings = async () => {
    const data = await api("/bookings/me");
    console.log("BOOKINGS:", data);
    setBookings(data);
  };


  return (
    <div>
      <h1>Test Login</h1>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={getBookings}>Get Bookings</button>
      <button onClick={fetchAllUsers}>Get Users</button>
      <ul>
        {users.length > 0 ? (
          users.map((user: any) => (
            <li key={user.id}>
              {user.email} - {user.role}
            </li>
          ))
        ) : (
          <div>Users not found</div>
        )}
      </ul>
      <ul>
        {bookings.map((b: any) => (
          <li key={b.id}>{b.date}</li>
        ))}
      </ul>
    </div>
  );
}
