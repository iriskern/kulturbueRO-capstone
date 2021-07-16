package de.neuefische.backend.controller;

import de.neuefische.backend.dto.WatchedLocationDto;
import de.neuefische.backend.model.Location;
import de.neuefische.backend.service.WatchedLocationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/me/locations")
@RequiredArgsConstructor
public class WatchedLocationsController {

    private final WatchedLocationsService watchedLocationsService;

    @PutMapping
    public Location updateUserInLocationWatchedBy(Principal principal, @RequestBody WatchedLocationDto locationToWatch) {
        return watchedLocationsService.updateUserInLocationWatchedBy(principal.getName(), locationToWatch.getId());
    }

    @GetMapping
    public List<Location> listAllWatchedLocationsSorted(Principal principal) {
        return watchedLocationsService.listAllWatchedLocationsSorted(principal.getName());
    }
}
