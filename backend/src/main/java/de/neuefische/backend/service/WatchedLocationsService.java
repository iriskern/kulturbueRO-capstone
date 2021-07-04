package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repo.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class WatchedLocationsService {

    private final LocationRepo locationRepo;

    @Autowired
    public WatchedLocationsService(LocationRepo locationRepo) {
        this.locationRepo = locationRepo;
    }

    public Location updateUserInLocationWatchedBy(String username, String locationId) {
        Optional<Location> locationToWatch = locationRepo.findById(locationId);

        if (locationToWatch.isPresent()) {
            Location updatedLocation = locationToWatch.get();
            if (!updatedLocation.getWatchedBy().contains(username)) {
                updatedLocation.getWatchedBy().add(username);
            } else {
                updatedLocation.getWatchedBy().remove(username);
            }
            return locationRepo.save(updatedLocation);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "location not found");
        }
    }

    public List<Location> listAllWatchedLocations(String watchedBy) {
        if(watchedBy.isEmpty()) {
            return locationRepo.findAll();
        }

        return locationRepo.findByWatchedBy(watchedBy);
    }
}
