import EventCard from "../components/EventCard";
import useWatchedEvents from "../hooks/useWatchedEvents";
import CardListWrapper from "../components/styles/CardListWrapper";

export default function MyEventsPage() {
  const { watchedEventsSorted, onLikedChange } = useWatchedEvents();

  return (
    <CardListWrapper>
      <h1>meine events</h1>

      <div>
        {watchedEventsSorted.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onLikedChange={onLikedChange}
          />
        ))}
      </div>
    </CardListWrapper>
  );
}
