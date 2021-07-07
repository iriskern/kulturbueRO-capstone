import useEvents from "../hooks/useEvents";
import EventCard from "../components/EventCard";
import CardListWrapper from "../components/styles/CardListWrapper";

export default function EventCalendarPage() {
  const eventsSortedByDate = useEvents();

  return (
    <CardListWrapper>
      <h1>eventkalender</h1>

      <div>
        {eventsSortedByDate.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </CardListWrapper>
  );
}
