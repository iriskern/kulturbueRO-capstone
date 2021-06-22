package de.neuefische.backend.repos;

import de.neuefische.backend.model.Location;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepo extends PagingAndSortingRepository<Location, String> {

    List<Location> findAll();
}
