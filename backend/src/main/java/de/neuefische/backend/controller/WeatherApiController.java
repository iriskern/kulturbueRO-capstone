package de.neuefische.backend.controller;

import de.neuefische.backend.model.weatherapi.WeatherApiResponse;
import de.neuefische.backend.service.WeatherApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
@RequiredArgsConstructor
public class WeatherApiController {

    private final WeatherApiService weatherApiService;

    @GetMapping
    public WeatherApiResponse getWeatherData(@RequestParam double latitude, @RequestParam double longitude) {
        return weatherApiService.getWeatherData(latitude, longitude);
    }

}
