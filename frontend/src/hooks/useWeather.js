import { useEffect, useState } from "react";
import axios from "axios";

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get(`/api/weather?latitude=${latitude}&longitude=${longitude}`)
      .then((response) => response.data)
      .then(setWeather)
      .catch((error) => console.error(error.message));
  }, [latitude, longitude]);

  return weather;
}
