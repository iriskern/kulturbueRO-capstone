import styled from "styled-components/macro";

export default function LocationCard({ location }) {
  return (
    <CardWrapper>
      <img src={location.pictureUrl} alt={"location"} />
      <h2>{location.name}</h2>
      <a href={location.homepage} target="_blank" rel="noreferrer">
        Homepage
      </a>
      <p>
        {location.address.street}, {location.address.postalCode}{" "}
        {location.address.city}
      </p>
      {location.openingHours && (
        <p>
          Öffnungszeiten: <br />
          {location.openingHours}
        </p>
      )}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background: #effffa;
  width: 330px;
  padding: 0 0 20px;
  margin: 30px auto 20px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;
