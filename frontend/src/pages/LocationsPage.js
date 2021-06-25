import styled from "styled-components/macro";
import useLocations from "../hooks/useLocations";
import LocationCard from "../components/LocationCard";

export default function LocationsPage() {
  const { locationsSortedByName } = useLocations();

  return (
    <Wrapper>
      <h1>Locations</h1>

      {locationsSortedByName.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
