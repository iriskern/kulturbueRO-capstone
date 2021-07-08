import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function useWatchedLocations() {
  const [watchedLocations, setWatchedLocations] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("/me/locations", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then(setWatchedLocations)
      .catch((error) => console.error(error.message));
  }, [token]);

  const watchedLocationsSortedByName = watchedLocations.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  function updateLocationInWatchlist(locationToWatch) {
    axios
      .put(
        "/me/locations",
        { id: locationToWatch.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((error) => console.error(error.message));
  }

  function onLikedChange(locationId) {
    setWatchedLocations(
      watchedLocations.filter((location) => location.id !== locationId)
    );
  }

  return {
    watchedLocationsSortedByName,
    updateLocationInWatchlist,
    onLikedChange,
  };
}
