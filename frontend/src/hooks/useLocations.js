import { useEffect, useState } from "react";
import axios from "axios";

export default function useLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("/locations")
      .then((response) => response.data)
      .then(setLocations)
      .catch((error) => console.error(error.message));
  }, []);

  return locations;
}
