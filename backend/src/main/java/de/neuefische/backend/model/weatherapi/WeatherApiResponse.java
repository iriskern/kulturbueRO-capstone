package de.neuefische.backend.model.weatherapi;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WeatherApiResponse {

    private WeatherApiList[] list;
}
