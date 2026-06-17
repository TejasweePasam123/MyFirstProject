import { useState } from "react";
import Register from "./Register";

function App() {
  const [view, setView] = useState("login"); // login | register | dashboard
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // 🔐 LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://flask-backend:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.ok) {
      setView("dashboard");
    } else {
      setMessage(data.message);
    }
  };

  // 🟢 DASHBOARD
  if (view === "dashboard") {
    return <h1>Welcome, {username} 🎉</h1>;
  }

  // 🟡 REGISTER
  if (view === "register") {
    return <Register goToLogin={() => setView("login")} />;
  }

  // 🔵 LOGIN
  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <br /><br />

        <button>Login</button>
      </form>

      <p style={{ color: "red" }}>{message}</p>

      <p>
        New user?{" "}
        <button onClick={() => setView("register")}>
          Register here
        </button>
      </p>
    </div>
  );
}

export default App;
