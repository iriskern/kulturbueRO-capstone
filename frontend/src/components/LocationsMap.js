import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styled from "styled-components/macro";
import "mapbox-gl/dist/mapbox-gl.css";
import ClickAwayListener from "react-click-away-listener";
import { useHistory } from "react-router-dom";

export default function LocationsMap({ locations }) {
  const [viewport, setViewport] = useState({
    longitude: 12.127262,
    latitude: 47.853927,
    width: "100vw",
    height: "100vh",
    zoom: 12,
  });

  const history = useHistory();
  const handleClick = () => history.goBack();

  const [selectedLocation, setSelectedLocation] = useState(null);
  const handleClickAway = () => setSelectedLocation(null);

  return (
    <Wrapper>
      <button onClick={handleClick}>back</button>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/iriskern/ckqc2oecy1d3418s5jkyrswsl"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Map>
          {locations.map((location) => (
            <Marker
              key={location.id}
              longitude={location.address.longitude}
              latitude={location.address.latitude}
              offsetTop={-50}
              offsetLeft={-25}
            >
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedLocation(location);
                }}
              >
                <img src={"/map_marker.png"} alt={"Event Marker Icon"} />
              </button>
            </Marker>
          ))}
          {selectedLocation && (
            <Popup
              longitude={selectedLocation.address.longitude}
              latitude={selectedLocation.address.latitude}
              onClose={() => setSelectedLocation(null)}
              offsetTop={-52}
            >
              <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                  <h2>{selectedLocation.name}</h2>
                  <address>
                    {selectedLocation.address.street},{" "}
                    {selectedLocation.address.postalCode}{" "}
                    {selectedLocation.address.city}
                  </address>
                </div>
              </ClickAwayListener>
            </Popup>
          )}
        </Map>
      </ReactMapGL>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 75%;
  overscroll-behavior-x: contain;
  display: flex;
  flex-direction: column;
  align-items: center;

  .marker {
    position: absolute;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

const Map = styled.div`
  button {
    background: none;
    padding: 0;
  }
`;
