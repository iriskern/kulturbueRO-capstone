import { useEffect, useState } from "react";
import axios from "axios";

export default function useEvent(id) {
  const [event, setEvent] = useState();

  useEffect(() => {
    axios
      .get(`/events/${id}/details`)
      .then((response) => response.data)
      .then(setEvent)
      .catch((error) => console.error(error.message));
  }, [id]);

  return event;
}
