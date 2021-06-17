package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repos.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventRepo eventRepo;

    @Autowired
    public EventService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    public List<Event> listAllEvents() {
        return eventRepo.findAll();
    }
}