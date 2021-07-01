package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.WatchedEventsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class WatchedEventsService {

    private final WatchedEventsRepo watchedEventsRepo;
    private final EventService eventService;

    @Autowired
    public WatchedEventsService(WatchedEventsRepo watchedEventsRepo, EventService eventService) {
        this.watchedEventsRepo = watchedEventsRepo;
        this.eventService = eventService;
    }

    public void addEventToWatchlist(String eventId) {
        Optional<Event> eventToWatch = eventService.getEventById(eventId);

        if (eventToWatch.isPresent()) {
            watchedEventsRepo.save(eventToWatch.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "event not found");
        }
    }

    public List<Event> listAllWatchedEvents(Optional<String> watchedBy) {
        if(watchedBy.isEmpty()) {
            return watchedEventsRepo.findAll();
        }

        return watchedEventsRepo.findByWatchedBy(watchedBy.get());
    }
}
