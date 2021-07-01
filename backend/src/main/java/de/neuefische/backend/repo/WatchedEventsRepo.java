package de.neuefische.backend.repo;

import de.neuefische.backend.model.Event;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WatchedEventsRepo extends PagingAndSortingRepository<Event, String> {

    List<Event> findAll();

    List<Event> findByWatchedBy(String watchedBy);
}
