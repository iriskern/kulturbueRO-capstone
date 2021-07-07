import { useEffect, useState } from "react";
import axios from "axios";
import { ChronoUnit, LocalDateTime } from "@js-joda/core";

export default function useWeather(latitude, longitude, dateTime) {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get(`/api/weather?latitude=${latitude}&longitude=${longitude}`)
      .then((response) => response.data)
      .then(setWeather)
      .catch((error) => console.error(error.message));
  }, [latitude, longitude]);

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

  return findWeatherAtEventTime(weather, dateTime);
}
