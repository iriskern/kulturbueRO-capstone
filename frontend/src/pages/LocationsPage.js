import useLocations from "../hooks/useLocations";
import LocationCard from "../components/LocationCard";
import { useHistory } from "react-router-dom";
import CardListWrapper from "../components/styles/CardListWrapper";
import NavButton from "../components/styles/NavButton";

export default function LocationsPage() {
  const history = useHistory();
  const handleClick = () => history.push(`/locations/map`);

  const locations = useLocations();

  return (
    <CardListWrapper>
      <h1>locations</h1>

      <div>
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            onLikedChange={() => {}}
          />
        ))}
      </div>
      <NavButton onClick={handleClick}>show map</NavButton>
    </CardListWrapper>
  );
}
