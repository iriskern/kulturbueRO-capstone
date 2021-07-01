import AuthContext from "../context/AuthContext";
import axios from "axios";
import { LocalDateTime } from "@js-joda/core";
import { useContext, useEffect, useState } from "react";

export default function useWatchedEvents() {
  const [watchedEvents, setWatchedEvents] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("/events/watched", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.data)
      .then(setWatchedEvents)
      .catch((error) => console.error(error.message));
  }, [token]);

  const watchedEventsSorted = watchedEvents.sort((a, b) =>
    LocalDateTime.parse(a.dateTime).isBefore(LocalDateTime.parse(b.dateTime))
      ? -1
      : LocalDateTime.parse(a.dateTime).isAfter(LocalDateTime.parse(b.dateTime))
      ? 1
      : 0
  );

  function addEventToWatchlist(eventToWatch) {
    axios
      .post("/events/watched", eventToWatch, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setWatchedEvents([...watchedEvents, eventToWatch]))
      .catch((error) => console.error(error.message));
  }

  return { watchedEventsSorted, addEventToWatchlist };
}
