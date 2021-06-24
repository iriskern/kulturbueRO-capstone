import EventCard from "../components/EventCard";
import styled from "styled-components/macro";
import useEvents from "../hooks/useEvents";

export default function Homepage() {
  const eventsSortedByDate = useEvents();

  return (
    <Wrapper>
      <h1>Event Highlights</h1>

      <div>
        {eventsSortedByDate
          .filter((event) => event.highlightEvent === true)
          .map((event) => (
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
