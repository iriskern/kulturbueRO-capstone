import styled from "styled-components/macro";
import useWatchedLocations from "../hooks/useWatchedLocations";
import LocationCard from "../components/LocationCard";

export default function MyLocationsPage() {
  const { watchedLocationsSortedByName } = useWatchedLocations();

  return (
    <Wrapper>
      <h1>meine locations</h1>

      <div>
        {watchedLocationsSortedByName.map((location) => (
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
  }
`;
