import { Link, useHistory, useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import styled from "styled-components/macro";
import WeatherCard from "../components/WeatherCard";

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
    <Wrapper>
      {event && (
        <CardWrapper>
          <img src={event.pictureUrl} alt={""} />
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
      <button onClick={handleClick}>back</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;

  button {
    background: #ecf765;
    position: fixed;
    right: 5px;
    bottom: 5px;
    font-size: 75%;
  }
`;

const CardWrapper = styled.div`
  background: #effffa;
  width: 330px;
  padding: 0 0 20px;
  margin: 30px auto 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  font-size: inherit;
  margin: 0;
`;
