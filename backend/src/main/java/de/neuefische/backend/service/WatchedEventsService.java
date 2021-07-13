package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.EventRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WatchedEventsService {

    private final EventRepo eventRepo;

    public Event updateUserInEventWatchedBy(String username, String eventId) {
        Event eventToWatch = eventRepo
                .findById(eventId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "event not found"));

        if (!eventToWatch.getWatchedBy().contains(username)) {
            eventToWatch.getWatchedBy().add(username);
        } else {
            eventToWatch.getWatchedBy().remove(username);
        }

        return eventRepo.save(eventToWatch);
    }

    public List<Event> listAllWatchedEvents(String watchedBy) {
        if(watchedBy.isEmpty()) {
            return eventRepo.findAll();
        }

        return eventRepo.findByWatchedBy(watchedBy);
    }
}
