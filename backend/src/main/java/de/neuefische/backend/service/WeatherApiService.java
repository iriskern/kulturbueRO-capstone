package de.neuefische.backend.service;

import de.neuefische.backend.model.weatherapi.WeatherApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class WeatherApiService {

    @Value("${openweathermap.key:}")
    private String owmApiKey;

    private final String weatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast";
    private final RestTemplate restTemplate;

    public WeatherApiResponse getWeatherData(double latitude, double longitude) {
        String requestUrl = weatherApiUrl
                +"?lat="+latitude
                +"&lon="+longitude
                +"&units=metric&lang=de"
                +"&appid="+owmApiKey;
        ResponseEntity<WeatherApiResponse> response = restTemplate.getForEntity(requestUrl, WeatherApiResponse.class);

        return response.getBody();
    }
}
