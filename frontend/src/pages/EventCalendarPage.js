import useEvents from "../hooks/useEvents";
import EventCard from "../components/EventCard";
import styled from "styled-components/macro";

export default function EventCalendarPage() {
  const eventsSortedByDate = useEvents();

  return (
    <Wrapper>
      <h1>eventkalender</h1>

      <div>
        {eventsSortedByDate.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
  }
`;
