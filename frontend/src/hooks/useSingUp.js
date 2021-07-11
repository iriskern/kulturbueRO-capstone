import axios from "axios";
import { useState } from "react";

export default function useSignUp() {
  const [success, setSuccess] = useState(false);
  const [invalidSignUp, setInvalidSignUp] = useState(false);

  const signUp = (credentials) => {
    axios
      .post("/auth/signup", credentials)
      .then((response) => response.data)
      .then(setSuccess)
      .catch((error) => {
        setInvalidSignUp(true);
        console.error(error.message);
      });
  };

  return { signUp, success, invalidSignUp };
}
