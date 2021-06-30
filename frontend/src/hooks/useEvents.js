import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocalDateTime } from "@js-joda/core";
import AuthContext from "../context/AuthContext";

export default function useEvents() {
  const [events, setEvents] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("/events", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.data)
      .then(setEvents)
      .catch((error) => console.error(error.message));
  }, []);

  return events.sort((a, b) =>
    LocalDateTime.parse(a.dateTime).isBefore(LocalDateTime.parse(b.dateTime))
      ? -1
      : LocalDateTime.parse(a.dateTime).isAfter(LocalDateTime.parse(b.dateTime))
      ? 1
      : 0
  );
}
