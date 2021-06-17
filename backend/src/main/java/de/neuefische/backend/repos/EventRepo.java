package de.neuefische.backend.repos;

import de.neuefische.backend.model.Event;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepo extends PagingAndSortingRepository<Event, String> {

    List<Event> findAll();
}
