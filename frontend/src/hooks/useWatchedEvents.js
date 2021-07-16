import AuthContext from "../context/AuthContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function useWatchedEvents() {
  const [watchedEvents, setWatchedEvents] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("/me/events", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.data)
      .then(setWatchedEvents)
      .catch((error) => console.error(error.message));
  }, [token]);

  function updateEventInWatchlist(eventToWatch) {
    axios
      .put(
        "/me/events",
        { id: eventToWatch.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((error) => console.error(error.message));
  }

  function onLikedChange(eventId) {
    setWatchedEvents(watchedEvents.filter((event) => event.id !== eventId));
  }

  return { watchedEvents, updateEventInWatchlist, onLikedChange };
}
