import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

export default function LocationCard({ location }) {
  const history = useHistory();
  const handleClick = () => history.push(`/locations/map/${location.id}`);

  return (
    <CardWrapper onClick={handleClick}>
      <img src={location.pictureUrl} alt={""} />
      <h2>{location.name}</h2>
      <a href={location.homepage} target="_blank" rel="noreferrer">
        Homepage
      </a>
      <address>
        {location.address.street}, {location.address.postalCode}{" "}
        {location.address.city}
      </address>
      {location.openingHours && (
        <p>
          Öffnungszeiten: <br />
          {location.openingHours}
        </p>
      )}
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
`;
