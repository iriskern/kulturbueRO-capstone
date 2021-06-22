import EventCard from "../components/EventCard";
import styled from "styled-components/macro";
import useEvents from "../hooks/useEvents";

export default function Homepage() {
  const { events } = useEvents();

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
    padding: 20px 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
