import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/api/weather?latitude=${latitude}&longitude=${longitude}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then(setWeather)
      .catch((error) => console.error(error.message));
  }, [latitude, longitude, token]);

  return weather;
}
