package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.EventRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepo eventRepo;

    public List<Event> listAllEventsSorted() {
        List<Event> allEvents = eventRepo.findAll();
        allEvents.sort(Comparator.comparing(Event::getDateTime));
        return allEvents;
    }

    public Optional<Event> getEventById(String id) {
        return eventRepo.findById(id);
    }
}