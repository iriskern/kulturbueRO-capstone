import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import useWatchedLocations from "../hooks/useWatchedLocations";
import AuthContext from "../context/AuthContext";
import Heart from "react-heart";

export default function LocationCard({ location }) {
  const history = useHistory();
  const handleClick = () => history.push(`/locations/map/${location.id}`);

  const { userData } = useContext(AuthContext);
  const { updateLocationInWatchlist } = useWatchedLocations();
  const handleLike = (evt) => {
    evt.stopPropagation();
    updateLocationInWatchlist(location);
  };
  const [active, setActive] = useState(
    location.watchedBy.includes(userData.sub)
  );

  return (
    <CardWrapper onClick={handleClick}>
      <div>
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
        <img src={location.pictureUrl} alt={""} />
      </div>

      <h2>{location.name}</h2>
      <a
        onClick={(event) => event.stopPropagation()}
        href={location.homepage}
        target="_blank"
        rel="noreferrer"
      >
        Homepage
      </a>
      <address>
        {location.address.street}, {location.address.postalCode}{" "}
        {location.address.city}
      </address>

      {location.openingHours && (
        <>
          <h3>Öffnungszeiten:</h3>
          {location.openingHours.split("\n").map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.section`
  background: #effffa;
  width: 330px;
  padding: 0 0 20px;
  margin: 30px auto 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  position: relative;

  h3 {
    font-size: 80%;
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
