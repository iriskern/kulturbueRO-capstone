import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function useLocation(id) {
  const [location, setLocation] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/locations/map/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then(setLocation)
      .catch((error) => console.error(error.message));
  }, [id, token]);

  return location;
}
