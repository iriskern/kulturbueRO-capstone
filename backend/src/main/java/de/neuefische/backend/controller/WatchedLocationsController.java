package de.neuefische.backend.controller;

import de.neuefische.backend.dto.WatchedLocationDto;
import de.neuefische.backend.model.Location;
import de.neuefische.backend.service.WatchedLocationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/me/locations")
public class WatchedLocationsController {

    private final WatchedLocationsService watchedLocationsService;

    @Autowired
    public WatchedLocationsController(WatchedLocationsService watchedLocationsService) {
        this.watchedLocationsService = watchedLocationsService;
    }

    @PutMapping
    public Location updateUserInLocationWatchedBy(Principal principal, @RequestBody WatchedLocationDto locationToWatch) {
        return watchedLocationsService.updateUserInLocationWatchedBy(principal.getName(), locationToWatch.getId());
    }

    @GetMapping
    public List<Location> listAllWatchedLocations(Principal principal) {
        return watchedLocationsService.listAllWatchedLocations(principal.getName());
    }
}
