import { useHistory, useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import styled from "styled-components/macro";

export default function EventDetailsPage() {
  const history = useHistory();
  const { id } = useParams();
  const event = useEvent(id);

  const handleClick = () => history.goBack();

  const dateTime = (i) => {
    return LocalDateTime.parse(i).format(
      DateTimeFormatter.ofPattern("dd.MM.yyyy | HH:mm")
    );
  };

  return (
    <Wrapper>
      <button onClick={handleClick}>back</button>
      {event && (
        <CardWrapper>
          <img src={event.pictureUrl} alt={""} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <h3>when</h3>
          <time>{dateTime(event.dateTime)} Uhr</time>
          <h3>where</h3>
          <address>{event.location.name}</address>
          <address>
            {event.location.address.street}, {event.location.address.postalCode}{" "}
            {event.location.address.city}
          </address>
          <h3>infos</h3>
          <a href={event.infoUrl} target="_blank" rel="noreferrer">
            organizer
          </a>
          <br />
          {event.ticketUrl && (
            <a href={event.ticketUrl} target="_blank" rel="noreferrer">
              ticket {event.entranceFee}€
            </a>
          )}
          <h3>tags</h3>
          <p>{event.eventTypes.join(", ")}</p>
        </CardWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 8px 10px 5px;
    border-radius: 5px;
    width: min-content;
    cursor: pointer;
    background: #effffa;
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
