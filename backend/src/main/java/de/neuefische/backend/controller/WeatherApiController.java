package de.neuefische.backend.controller;

import de.neuefische.backend.model.weatherapi.WeatherApiResponse;
import de.neuefische.backend.service.WeatherApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
public class WeatherApiController {

    private final WeatherApiService weatherApiService;

    @Autowired
    public WeatherApiController(WeatherApiService weatherApiService) {
        this.weatherApiService = weatherApiService;
    }

    @GetMapping
    public WeatherApiResponse getWeatherData(@RequestParam double latitude, @RequestParam double longitude) {
        return weatherApiService.getWeatherData(latitude, longitude);
    }

}
