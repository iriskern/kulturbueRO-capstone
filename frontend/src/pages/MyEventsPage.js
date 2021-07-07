import EventCard from "../components/EventCard";
import styled from "styled-components/macro";
import useWatchedEvents from "../hooks/useWatchedEvents";

export default function MyEventsPage() {
  const { watchedEventsSorted } = useWatchedEvents();

  return (
    <Wrapper>
      <h1>meine events</h1>

      <div>
        {watchedEventsSorted.map((event) => (
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
