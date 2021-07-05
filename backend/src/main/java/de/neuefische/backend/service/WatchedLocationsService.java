package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repo.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class WatchedLocationsService {

    private final LocationRepo locationRepo;

    @Autowired
    public WatchedLocationsService(LocationRepo locationRepo) {
        this.locationRepo = locationRepo;
    }

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

    public List<Location> listAllWatchedLocations(String watchedBy) {
        if(watchedBy.isEmpty()) {
            return locationRepo.findAll();
        }

        return locationRepo.findByWatchedBy(watchedBy);
    }
}
