import AuthContext from "./AuthContext";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [token, setToken] = useState();

  const login = (credentials) => {
    axios
      .post("/auth/login", credentials)
      .then((response) => response.data)
      .then(setToken)
      .then(() => history.push("/home"))
      .catch((error) => console.error(error.message));
  };

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
}
