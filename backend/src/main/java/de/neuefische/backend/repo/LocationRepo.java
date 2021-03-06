package de.neuefische.backend.repo;

import de.neuefische.backend.model.Location;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LocationRepo extends PagingAndSortingRepository<Location, String> {

    List<Location> findAll();

    Optional<Location> findById(String id);

    List<Location> findByWatchedBy(String watchedBy);
}
