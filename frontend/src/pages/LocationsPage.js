import styled from "styled-components/macro";
import useLocations from "../hooks/useLocations";
import LocationCard from "../components/LocationCard";

export default function LocationsPage() {
  const { locations } = useLocations();

  return (
    <Wrapper>
      <h1>Locations</h1>

      <div>
        {locations
          .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
          .map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    background: #effffa;
    font-size: 100%;
    text-align: center;
    padding: 20px 15px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;
