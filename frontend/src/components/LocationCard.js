import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import CardWrapper from "./styles/CardWrapper";
import LikeButton from "./LikeButton";

export default function LocationCard({ location, onLikedChange }) {
  const history = useHistory();
  const handleClick = () => history.push(`/locations/map/${location.id}`);

  const { userData } = useContext(AuthContext);

  return (
    <CardWrapper onClick={handleClick}>
      <div>
        {userData && (
          <LikeButton likedThing={location} onLikedChange={onLikedChange} />
        )}
        <img src={location.pictureUrl} alt={"location"} />
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
