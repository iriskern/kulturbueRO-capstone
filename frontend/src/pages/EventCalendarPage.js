import useEvents from "../hooks/useEvents";
import EventCard from "../components/EventCard";
import styled from "styled-components/macro";
import { LocalDateTime } from "@js-joda/core";

export default function EventCalendarPage() {
  const { events } = useEvents();

  return (
    <Wrapper>
      <h1>Event Calendar</h1>

      <div>
        {events
          .sort((a, b) =>
            LocalDateTime.parse(a.dateTime).isBefore(
              LocalDateTime.parse(b.dateTime)
            )
              ? -1
              : LocalDateTime.parse(a.dateTime).isAfter(
                  LocalDateTime.parse(b.dateTime)
                )
              ? 1
              : 0
          )
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
