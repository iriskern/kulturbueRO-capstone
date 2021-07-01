import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function useLocations() {
  const [locations, setLocations] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("/locations", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.data)
      .then(setLocations)
      .catch((error) => console.error(error.message));
  }, [token]);

  const locationsSortedByName = locations.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  return { locations, locationsSortedByName };
}
