package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "events")
public class Event {

    @Id
    private String id;
    private String title;
    private String description;
    private LocalDateTime dateTime;
    private Location location;
    private EventSetting eventSetting;
    private List<EventType> eventTypes;
    private String picture;
    private String infoUrl;
    private String ticketUrl;
    private double entranceFee;
}
