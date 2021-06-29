import { useParams } from "react-router-dom";
import useLocation from "../hooks/useLocation";
import LocationsMap from "../components/LocationsMap";

export default function LocationMapPage() {
  const { id } = useParams();
  const location = useLocation(id);
  const locations = location ? [location] : [];

  return <LocationsMap locations={locations} />;
}
