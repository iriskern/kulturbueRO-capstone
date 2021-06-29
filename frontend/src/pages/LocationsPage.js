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
      <h1>Locations</h1>

      <div>
        <button onClick={handleClick}>show map</button>

        {locationsSortedByName.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
