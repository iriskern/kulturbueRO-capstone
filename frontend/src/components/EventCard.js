import { useHistory } from "react-router-dom";
import "@js-joda/timezone";
import { Locale } from "@js-joda/locale_en";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import styled from "styled-components/macro";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import CardWrapper from "./styles/CardWrapper";
import LikeButton from "./LikeButton";
import StyledLink from "./styles/StyledLink";

export default function EventCard({ event, onLikedChange }) {
  const history = useHistory();
  const handleClick = () => history.push(`/events/${event.id}/details`);

  const dateTime = LocalDateTime.parse(event.dateTime);
  const { userData } = useContext(AuthContext);

  return (
    <CardWrapper onClick={handleClick}>
      <div>
        <Date>
          <time>
            {dateTime.format(
              DateTimeFormatter.ofPattern("MMM").withLocale(Locale.ENGLISH)
            )}
          </time>
          <time className="day">
            {dateTime.format(DateTimeFormatter.ofPattern("dd"))}
          </time>
        </Date>

        {userData && (
          <LikeButton likedThing={event} onLikedChange={onLikedChange} />
        )}
        <img src={event.pictureUrl} alt={"event"} />
      </div>

      <h2>{event.title}</h2>
      <address>
        <StyledLink
          onClick={(event) => event.stopPropagation()}
          to={`/locations/map/${event.location.id}`}
        >
          {event.location.name} {event.location.address.city}
        </StyledLink>
      </address>
      <time>{dateTime.format(DateTimeFormatter.ofPattern("HH:mm"))} Uhr</time>
    </CardWrapper>
  );
}

const Date = styled.div`
  height: 58px;
  text-align: center;
  line-height: 70%;
  position: absolute;
  left: 20px;
  background: #ecf765;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .day {
    font-size: 160%;
    font-weight: bold;
    padding-bottom: 3px;
  }
`;
