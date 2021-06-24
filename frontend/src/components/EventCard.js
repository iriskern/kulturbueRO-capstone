import { useHistory } from "react-router-dom";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import styled from "styled-components/macro";

export default function EventCard({ event }) {
  const history = useHistory();
  const handleClick = () => history.push(`/events/${event.id}/details`);

  const dateTime = LocalDateTime.parse(event.dateTime);

  return (
    <CardWrapper onClick={handleClick}>
      <CardPicture>
        <div>
          <time>{dateTime.format(DateTimeFormatter.ofPattern("MM"))}</time>
          <time className="day">
            {dateTime.format(DateTimeFormatter.ofPattern("dd"))}
          </time>
        </div>
        <img src={event.pictureUrl} alt={""} />
      </CardPicture>
      <h2>{event.title}</h2>
      <address>
        {event.location.name} {event.location.address.city}
      </address>
      <time>{dateTime.format(DateTimeFormatter.ofPattern("HH:mm"))} Uhr</time>
    </CardWrapper>
  );
}

const CardWrapper = styled.button`
  background: #effffa;
  width: 330px;
  padding: 0 0 20px;
  margin: 30px auto 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

const CardPicture = styled.div`
  div {
    height: 51px;
    text-align: center;
    line-height: 50%;
    position: absolute;
    left: 20px;
    background: #ecf765;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .day {
    font-size: 160%;
    font-weight: bold;
    padding-bottom: 3px;
  }
`;
