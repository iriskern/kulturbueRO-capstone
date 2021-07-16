package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repo.LocationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WatchedLocationsService {

    private final LocationRepo locationRepo;

    public Location updateUserInLocationWatchedBy(String username, String locationId) {
        Location locationToWatch = locationRepo
                .findById(locationId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "location not found"));

        if (!locationToWatch.getWatchedBy().contains(username)) {
            locationToWatch.getWatchedBy().add(username);
        } else {
            locationToWatch.getWatchedBy().remove(username);
        }

        return locationRepo.save(locationToWatch);
    }

    public List<Location> listAllWatchedLocationsSorted(String watchedBy) {
        if(watchedBy.isEmpty()) {
            return locationRepo.findAll();
        }

        List<Location> allWatchedLocations = locationRepo.findByWatchedBy(watchedBy);
        allWatchedLocations.sort(Comparator.comparing(Location::getName));
        return allWatchedLocations;
    }
}
