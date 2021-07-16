package de.neuefische.backend.controller;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.service.LocationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/locations")
@RequiredArgsConstructor
public class LocationController {

    private final LocationService locationService;

    @GetMapping
    public List<Location> listAllLocationsSorted() {
        return locationService.listAllLocationsSorted();
    }

    @GetMapping("/map/{id}")
    public Location getLocationById(@PathVariable String id) {
        return locationService
                .getLocationById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
