import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";
import styled from "styled-components/macro";

export default function Homepage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("events")
      .then((response) => response.data)
      .then(setEvents)
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Wrapper>
      <h1>Event Highlights</h1>

      <div>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    background: #effffa;
    font-size: 100%;
    text-align: center;
    padding: 40px 15px;
  }
`;
