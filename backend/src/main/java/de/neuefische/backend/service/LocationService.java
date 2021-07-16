package de.neuefische.backend.service;

import de.neuefische.backend.model.Location;
import de.neuefische.backend.repo.LocationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LocationService {

    private final LocationRepo locationRepo;

    public List<Location> listAllLocationsSorted() {
        List<Location> allLocations = locationRepo.findAll();
        allLocations.sort(Comparator.comparing(Location::getName));
        return allLocations;
    }

    public Optional<Location> getLocationById(String id) {
        return locationRepo.findById(id);
    }
}