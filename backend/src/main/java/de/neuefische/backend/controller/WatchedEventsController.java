package de.neuefische.backend.controller;

import de.neuefische.backend.dto.WatchedEventDto;
import de.neuefische.backend.model.Event;
import de.neuefische.backend.service.WatchedEventsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/me/events")
@RequiredArgsConstructor
public class WatchedEventsController {

    private final WatchedEventsService watchedEventsService;

    @PutMapping
    public Event updateUserInEventWatchedBy(Principal principal, @RequestBody WatchedEventDto eventToWatch) {
        return watchedEventsService.updateUserInEventWatchedBy(principal.getName(), eventToWatch.getId());
    }

    @GetMapping
    public List<Event> listAllWatchedEventsSorted(Principal principal) {
        return watchedEventsService.listAllWatchedEventsSorted(principal.getName());
    }
}
