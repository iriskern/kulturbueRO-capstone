import styled from "styled-components/macro";
import Heart from "react-heart";
import { useContext, useState } from "react";
import useWatchedEvents from "../hooks/useWatchedEvents";
import useWatchedLocations from "../hooks/useWatchedLocations";
import AuthContext from "../context/AuthContext";

export default function LikeButton({ likedThing, onLikedChange }) {
  const { userData } = useContext(AuthContext);
  const [active, setActive] = useState(
    likedThing.watchedBy.includes(userData.sub)
  );
  const { updateEventInWatchlist } = useWatchedEvents();
  const { updateLocationInWatchlist } = useWatchedLocations();

  function handleLike(evt) {
    evt.stopPropagation();
    likedThing.eventTypes
      ? updateEventInWatchlist(likedThing)
      : updateLocationInWatchlist(likedThing);
    onLikedChange(likedThing.id);
  }

  return (
    <Button onClick={handleLike}>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        inactiveColor="#ecf765"
        activeColor="#ecf765"
      />
    </Button>
  );
}

const Button = styled.button`
  width: 55px;
  position: absolute;
  top: 0;
  right: 5px;
  background: transparent;
  margin: 0;
`;
