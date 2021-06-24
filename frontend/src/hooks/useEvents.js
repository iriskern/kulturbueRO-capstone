import { useEffect, useState } from "react";
import axios from "axios";
import { LocalDateTime } from "@js-joda/core";

export default function useEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("/events")
      .then((response) => response.data)
      .then(setEvents)
      .catch((error) => console.log(error.message));
  }, []);

  return events.sort((a, b) =>
    LocalDateTime.parse(a.dateTime).isBefore(LocalDateTime.parse(b.dateTime))
      ? -1
      : LocalDateTime.parse(a.dateTime).isAfter(LocalDateTime.parse(b.dateTime))
      ? 1
      : 0
  );
}
