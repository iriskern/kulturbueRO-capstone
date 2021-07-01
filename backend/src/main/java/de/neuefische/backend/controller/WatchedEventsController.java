package de.neuefische.backend.controller;

import de.neuefische.backend.dto.WatchedEventDto;
import de.neuefische.backend.model.Event;
import de.neuefische.backend.service.WatchedEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events/watched")
public class WatchedEventsController {

    private final WatchedEventsService watchedEventsService;

    @Autowired
    public WatchedEventsController(WatchedEventsService watchedEventsService) {
        this.watchedEventsService = watchedEventsService;
    }

    @PostMapping
    public void addEventToWatchlist(@RequestBody WatchedEventDto eventToWatch) {
        watchedEventsService.addEventToWatchlist(eventToWatch.getId());
    }

    @GetMapping
    public List<Event> listAllWatchedEvents(@RequestParam Optional<String> watchedBy) {
        return watchedEventsService.listAllWatchedEvents(watchedBy);
    }
}
