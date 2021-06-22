import { useEffect, useState } from "react";
import axios from "axios";

export default function useEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("events")
      .then((response) => response.data)
      .then(setEvents)
      .catch((error) => console.log(error.message));
  }, []);

  return { events };
}
