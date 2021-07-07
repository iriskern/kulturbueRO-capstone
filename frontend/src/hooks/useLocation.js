import { useEffect, useState } from "react";
import axios from "axios";

export default function useLocation(id) {
  const [location, setLocation] = useState();

  useEffect(() => {
    axios
      .get(`/locations/map/${id}`)
      .then((response) => response.data)
      .then(setLocation)
      .catch((error) => console.error(error.message));
  }, [id]);

  return location;
}
