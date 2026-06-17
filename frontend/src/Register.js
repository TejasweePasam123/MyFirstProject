import { useState } from "react";

function Register({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://flask-backend:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      setTimeout(goToLogin, 1000); // go to login after success
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
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

        <button>Register</button>
      </form>

      <p>{message}</p>

      <button onClick={goToLogin}>Back to Login</button>
    </div>
  );
}

export default Register;
