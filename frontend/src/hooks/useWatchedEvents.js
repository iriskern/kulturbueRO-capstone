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

  function updateEventInWatchlist(eventToWatch) {
    axios
      .put(
        "/events/watched",
        { id: eventToWatch.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((error) => console.error(error.message));
  }

  return { watchedEventsSorted, updateEventInWatchlist };
}
