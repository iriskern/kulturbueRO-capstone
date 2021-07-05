package de.neuefische.backend.service;

import de.neuefische.backend.dto.WeatherApiRequestDto;
import de.neuefische.backend.model.weatherapi.WeatherApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherApiService {

    @Value("${openweathermap.key:}")
    private String owmApiKey;

    private final String weatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast";
    private final RestTemplate restTemplate;

    @Autowired
    public WeatherApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public WeatherApiResponse getWeatherData(WeatherApiRequestDto coordinates) {
        String requestUrl = weatherApiUrl
                +"?lat="+coordinates.getLatitude()
                +"&lon="+coordinates.getLongitude()
                +"&units=metric&lang=de"
                +"&appid="+owmApiKey;
        ResponseEntity<WeatherApiResponse> response = restTemplate.getForEntity(requestUrl, WeatherApiResponse.class);

        return response.getBody();
    }
}
