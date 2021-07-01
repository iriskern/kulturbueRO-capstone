import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export default function useEvent(id) {
  const [event, setEvent] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/events/${id}/details`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data)
      .then(setEvent)
      .catch((error) => console.error(error.message));
  }, [id, token]);

  return event;
}
