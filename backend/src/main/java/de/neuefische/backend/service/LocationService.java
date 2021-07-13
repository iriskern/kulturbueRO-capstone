package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repo.LocationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LocationService {

    private final LocationRepo locationRepo;

    public List<Location> listAllLocations() {
        return locationRepo.findAll();
    }

    public Optional<Location> getLocationById(String id) {
        return locationRepo.findById(id);
    }
}