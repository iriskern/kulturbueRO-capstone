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

    private final EventService eventService;
    private final EventRepo eventRepo;

    @Autowired
    public WatchedEventsService(EventService eventService, EventRepo eventRepo) {
        this.eventService = eventService;
        this.eventRepo = eventRepo;
    }

    public Event addUserToEventWatchedBy(String username, String eventId) {
        Optional<Event> eventToWatch = eventService.getEventById(eventId);

        if (eventToWatch.isPresent()) {
            Event updatedEvent = eventToWatch.get();
            if (!updatedEvent.getWatchedBy().contains(username)) {
                updatedEvent.getWatchedBy().add(username);
                return eventRepo.save(updatedEvent);
            } else {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "event already liked");
            }
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
