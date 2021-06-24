import { useEffect, useState } from "react";
import axios from "axios";

export default function useLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("/locations")
      .then((response) => response.data)
      .then(setLocations)
      .catch((error) => console.log(error.message));
  }, []);

  return locations.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );
}
