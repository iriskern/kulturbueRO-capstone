package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.Location;
import de.neuefische.backend.repos.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepo eventRepo;
    private final LocationService locationService;

    @Autowired
    public EventService(EventRepo eventRepo, LocationService locationService) {
        this.eventRepo = eventRepo;
        this.locationService = locationService;
    }

    public List<Event> listAllEvents() {
        return eventRepo.findAll();
    }

    public Optional<Event> getEventById(String id) {
        return eventRepo.findById(id);
    }

    public Event createEvent(Event event, Location location) {
        Event newEvent = Event.builder()
                .title(event.getTitle())
                .description(event.getDescription())
                .dateTime(event.getDateTime())
                .location(locationService.getLocationById(location.getId()).get())
                .eventSetting(event.getEventSetting())
                .eventTypes(event.getEventTypes())
                .pictureUrl(event.getPictureUrl())
                .infoUrl(event.getInfoUrl())
                .ticketUrl(event.getTicketUrl())
                .entranceFee(event.getEntranceFee())
                .highlightEvent(event.isHighlightEvent())
                .build();

        return eventRepo.save(newEvent);
    }
}