import { useHistory, useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import WeatherCard from "../components/WeatherCard";
import NavButton from "../components/styles/NavButton";
import CardWrapper from "../components/styles/CardWrapper";
import StyledLink from "../components/styles/StyledLink";

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = useEvent(id);

  const history = useHistory();
  const handleClick = () => history.goBack();

  const dateTime = (i) => {
    return LocalDateTime.parse(i).format(
      DateTimeFormatter.ofPattern("dd.MM.yyyy | HH:mm")
    );
  };

  return (
    <>
      {event && (
        <CardWrapper>
          <img src={event.pictureUrl} alt={"event"} />

          <h2>{event.title}</h2>
          {event.description.split("\n").map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}

          <h3>when</h3>
          <time>{dateTime(event.dateTime)} Uhr</time>

          <h3>where</h3>
          <address>
            <StyledLink to={`/locations/map/${event.location.id}`}>
              {event.location.name}
              <br />
              {event.location.address.street},{" "}
              {event.location.address.postalCode} {event.location.address.city}
            </StyledLink>
          </address>

          <h3>weather</h3>
          <WeatherCard
            latitude={event.location.address.latitude}
            longitude={event.location.address.longitude}
            dateTime={event.dateTime}
          />

          <h3>links</h3>
          <a href={event.infoUrl} target="_blank" rel="noreferrer">
            Veranstalter
          </a>
          <br />
          {event.ticketUrl && (
            <a href={event.ticketUrl} target="_blank" rel="noreferrer">
              Ticket {event.entranceFee}€
            </a>
          )}

          <h3>tags</h3>
          <p>{event.eventTypes.join(", ")}</p>
        </CardWrapper>
      )}
      <NavButton onClick={handleClick}>back</NavButton>
    </>
  );
}
