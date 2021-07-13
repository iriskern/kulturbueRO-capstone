package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.EventRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepo eventRepo;

    public List<Event> listAllEvents() {
        return eventRepo.findAll();
    }

    public Optional<Event> getEventById(String id) {
        return eventRepo.findById(id);
    }
}