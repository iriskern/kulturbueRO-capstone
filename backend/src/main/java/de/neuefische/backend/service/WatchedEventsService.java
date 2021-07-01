package de.neuefische.backend.service;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.repo.WatchedEventsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WatchedEventsService {

    private final WatchedEventsRepo watchedEventsRepo;

    @Autowired
    public WatchedEventsService(WatchedEventsRepo watchedEventsRepo) {
        this.watchedEventsRepo = watchedEventsRepo;
    }

    public void addEventToWatchlist(Event newEvent) {
        watchedEventsRepo.save(newEvent);
    }

    public List<Event> listAllWatchedEvents(Optional<String> watchedBy) {
        if(watchedBy.isEmpty()) {
            return watchedEventsRepo.findAll();
        }

        return watchedEventsRepo.findByWatchedBy(watchedBy.get());
    }
}
