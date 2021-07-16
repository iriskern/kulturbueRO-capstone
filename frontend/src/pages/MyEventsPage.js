import EventCard from "../components/EventCard";
import useWatchedEvents from "../hooks/useWatchedEvents";
import CardListWrapper from "../components/styles/CardListWrapper";

export default function MyEventsPage() {
  const { watchedEvents, onLikedChange } = useWatchedEvents();

  return (
    <CardListWrapper>
      <h1>meine events</h1>

      <div>
        {watchedEvents.map((event) => (
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
