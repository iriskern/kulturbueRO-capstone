import AuthContext from "./AuthContext";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [token, setToken] = useState();
  const [invalidLogin, setInvalidLogin] = useState(false);

  const login = (credentials) => {
    axios
      .post("/auth/login", credentials)
      .then((response) => response.data)
      .then(setToken)
      .then(() => history.push("/home"))
      .catch((error) => {
        setInvalidLogin(true);
        console.error(error.message);
      });
  };

  return (
    <AuthContext.Provider value={{ token, login, invalidLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
