import AuthContext from "./AuthContext";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function AuthProvider({ children }) {
  const history = useHistory();
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [invalidLogin, setInvalidLogin] = useState(false);

  const login = (credentials) => {
    axios
      .post("/auth/login", credentials)
      .then((response) => response.data)
      .then((data) => {
        setToken(data);
        setUserData(jwt_decode(data.toString()));
      })
      .then(() => history.push("/home"))
      .catch((error) => {
        setInvalidLogin(true);
        console.error(error.message);
      });
  };

  return (
    <AuthContext.Provider value={{ login, token, userData, invalidLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
