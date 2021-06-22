package de.neuefische.backend.controller;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> listAllEvents() {
        return eventService.listAllEvents();
    }

    @GetMapping("/{id}/details")
    public Event getEventById(@PathVariable String id) {
        return eventService
                .getEventById(id)
                .orElseThrow(NoSuchElementException::new);
    }
}