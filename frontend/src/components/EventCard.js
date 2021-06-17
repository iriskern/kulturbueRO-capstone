export default function EventCard({ event }) {
  return (
    <div>
      {event.title}
      {event.location.name}
      {event.location.address.city}
      {event.dateTime}
    </div>
  );
}
