package de.neuefische.backend.controller;

import de.neuefische.backend.dto.WatchedEventDto;
import de.neuefische.backend.model.Event;
import de.neuefische.backend.service.WatchedEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/events/watched")
public class WatchedEventsController {

    private final WatchedEventsService watchedEventsService;

    @Autowired
    public WatchedEventsController(WatchedEventsService watchedEventsService) {
        this.watchedEventsService = watchedEventsService;
    }

    @PutMapping
    public Event updateUserInEventWatchedBy(Principal principal, @RequestBody WatchedEventDto eventToWatch) {
        return watchedEventsService.updateUserInEventWatchedBy(principal.getName(), eventToWatch.getId());
    }

    @GetMapping
    public List<Event> listAllWatchedEvents(Principal principal) {
        return watchedEventsService.listAllWatchedEvents(principal.getName());
    }
}
