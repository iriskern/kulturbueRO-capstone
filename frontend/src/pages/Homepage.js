import EventCard from "../components/EventCard";
import useEvents from "../hooks/useEvents";
import CardListWrapper from "../components/styles/CardListWrapper";

export default function Homepage() {
  const eventsSortedByDate = useEvents();

  return (
    <CardListWrapper>
      <h1>event highlights</h1>

      <div>
        {eventsSortedByDate
          .filter((event) => event.highlightEvent === true)
          .map((event) => (
            <EventCard key={event.id} event={event} onLikedChange={() => {}} />
          ))}
      </div>
    </CardListWrapper>
  );
}
