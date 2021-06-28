import useLocations from "../hooks/useLocations";
import LocationsMap from "../components/LocationsMap";

export default function LocationsMapPage() {
  const { locations } = useLocations();

  return <LocationsMap locations={locations} />;
}
