package de.neuefische.backend.model.weatherapi;

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
    private String dt_txt;
}
