import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function LoginPage() {
  const initialState = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialState);
  const { login } = useContext(AuthContext);

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          placeholder="enter username"
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
        />
      </label>
      <label>
        Password
        <input
          placeholder="enter password"
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
}
