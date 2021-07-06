import useWeather from "../hooks/useWeather";
import styled from "styled-components/macro";
import { ChronoUnit, LocalDateTime } from "@js-joda/core";

export default function WeatherCard({ latitude, longitude, dateTime }) {
  const weather = useWeather(latitude, longitude);

  function findWeatherAtEventTime(weather, dateTime) {
    if (!weather) {
      return undefined;
    }
    if (
      LocalDateTime.parse(dateTime).compareTo(LocalDateTime.now().plusDays(4)) >
      0
    ) {
      return undefined;
    } else {
      return weather.list.find(
        (item) =>
          LocalDateTime.parse(item.dt_txt.replace(" ", "T")).until(
            LocalDateTime.parse(dateTime),
            ChronoUnit.HOURS
          ) < 3
      );
    }
  }
  const weatherAtEvent = findWeatherAtEventTime(weather, dateTime);

  return (
    <>
      {weatherAtEvent === undefined ? (
        <p>coming soon...</p>
      ) : (
        <CardWrapper>
          <div>
            <p>{weatherAtEvent.weather[0].description}</p>
            <p className="degree">{weatherAtEvent.main.temp.toFixed(1)} °C</p>
          </div>
          <img
            src={
              "https://openweathermap.org/img/wn/" +
              weatherAtEvent.weather[0].icon +
              "@2x.png"
            }
            alt={""}
          />
        </CardWrapper>
      )}
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #c4c4cc;
  width: 310px;
  margin: 5px 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .degree {
    font-size: 150%;
    margin-bottom: 0;
  }

  img {
    width: 95px;
    height: 95px;
  }
`;
