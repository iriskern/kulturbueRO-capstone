package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repos.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationService {

    private final LocationRepo locationRepo;

    @Autowired
    public LocationService(LocationRepo locationRepo) {
        this.locationRepo = locationRepo;
    }

    public List<Location> listAllLocations() {
        return locationRepo.findAll();
    }

    public Optional<Location> getLocationById(String id) {
        return locationRepo.findById(id);
    }
}