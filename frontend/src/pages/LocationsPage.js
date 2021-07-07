import styled from "styled-components/macro";
import useLocations from "../hooks/useLocations";
import LocationCard from "../components/LocationCard";
import { useHistory } from "react-router-dom";

export default function LocationsPage() {
  const history = useHistory();
  const handleClick = () => history.push(`/locations/map`);

  const { locationsSortedByName } = useLocations();

  return (
    <Wrapper>
      <h1>locations</h1>

      <div>
        {locationsSortedByName.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <Button onClick={handleClick}>show map</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  background: #ecf765;
  position: fixed;
  right: 5px;
  bottom: 5px;
  font-size: 75%;
`;
