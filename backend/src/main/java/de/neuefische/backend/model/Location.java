package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "locations")
public class Location {

    @Id
    private String id;
    private String name;
    private Address address;
    private String openingHours;
    private String picture;
    private String homepage;
    private List<Event> upcomingEvents;
    private boolean myLocation;
}