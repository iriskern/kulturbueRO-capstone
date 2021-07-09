package de.neuefische.backend.model.weatherapi;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WeatherApiList {

    private WeatherApiMain main;
    private WeatherApiWeather[] weather;
    @JsonProperty("dt_txt")
    private String dateAndTime;
}
