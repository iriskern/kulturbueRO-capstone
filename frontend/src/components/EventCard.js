import { Link, useHistory } from "react-router-dom";
import Heart from "react-heart";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import styled from "styled-components/macro";
import { useContext, useState } from "react";
import useWatchedEvents from "../hooks/useWatchedEvents";
import AuthContext from "../context/AuthContext";

export default function EventCard({ event }) {
  const history = useHistory();
  const handleClick = () => history.push(`/events/${event.id}/details`);

  const dateTime = LocalDateTime.parse(event.dateTime);

  const { userData } = useContext(AuthContext);
  const { updateEventInWatchlist } = useWatchedEvents();
  const handleLike = (evt) => {
    evt.stopPropagation();
    updateEventInWatchlist(event);
  };
  const [active, setActive] = useState(event.watchedBy.includes(userData.sub));

  return (
    <CardWrapper onClick={handleClick}>
      <CardPicture>
        <div>
          <time>{dateTime.format(DateTimeFormatter.ofPattern("MM"))}</time>
          <time className="day">
            {dateTime.format(DateTimeFormatter.ofPattern("dd"))}
          </time>
        </div>

        {userData && (
          <LikeButton onClick={handleLike}>
            <Heart
              isActive={active}
              onClick={() => setActive(!active)}
              inactiveColor="#ecf765"
              activeColor="#ecf765"
            />
          </LikeButton>
        )}

        <img src={event.pictureUrl} alt={"event"} />
      </CardPicture>

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

const CardWrapper = styled.section`
  background: #effffa;
  width: 330px;
  padding: 0 0 20px;
  margin: 25px auto 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  position: relative;
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

const LikeButton = styled.button`
  width: 55px;
  position: absolute;
  top: 0;
  right: 5px;
  background-color: transparent;
  margin: 0;
`;

const StyledLink = styled(Link)`
  font-size: inherit;
  margin: 0;
`;
