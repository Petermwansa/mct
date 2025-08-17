import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const AdminLogin = () => {

  const { login } = useContext(AuthContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate("/admin"); // redirect to dashboard
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Admin Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

// ✅ Simple inline styles (replace with Tailwind/MaterialUI later if you want)
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  form: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  input: {
    marginBottom: "1rem",
    padding: "0.75rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  error: {
    color: "red",
    marginBottom: "1rem",
    fontSize: "0.9rem",
  },
};
