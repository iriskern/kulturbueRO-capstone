package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class WatchedEventsService {

    private final EventRepo eventRepo;

    @Autowired
    public WatchedEventsService(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    public Event updateUserInEventWatchedBy(String username, String eventId) {
        Optional<Event> eventToWatch = eventRepo.findById(eventId);

        if (eventToWatch.isPresent()) {
            Event updatedEvent = eventToWatch.get();
            if (!updatedEvent.getWatchedBy().contains(username)) {
                updatedEvent.getWatchedBy().add(username);
            } else {
                updatedEvent.getWatchedBy().remove(username);
            }
            return eventRepo.save(updatedEvent);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "event not found");
        }
    }

    public List<Event> listAllWatchedEvents(String watchedBy) {
        if(watchedBy.isEmpty()) {
            return eventRepo.findAll();
        }

        return eventRepo.findByWatchedBy(watchedBy);
    }
}
