import useWatchedLocations from "../hooks/useWatchedLocations";
import LocationCard from "../components/LocationCard";
import CardListWrapper from "../components/styles/CardListWrapper";

export default function MyLocationsPage() {
  const { watchedLocationsSortedByName } = useWatchedLocations();

  return (
    <CardListWrapper>
      <h1>meine locations</h1>

      <div>
        {watchedLocationsSortedByName.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </CardListWrapper>
  );
}
