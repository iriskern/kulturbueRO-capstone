package de.neuefische.backend.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;
import java.util.NoSuchElementException;

@JsonFormat(shape=JsonFormat.Shape.OBJECT)
public enum EventType {
    CINEMA("Kino"),
    COMEDY("Comedy"),
    DANCE("Tanz"),
    EXHIBITION("Ausstellung"),
    FOOD_DRINK("Essen und Trinken"),
    KIDS("Kinder"),
    MUSIC("Musik"),
    NIGHTLIFE("Nachtleben"),
    OTHER("Verschiedenes"),
    SPORTS("Sport"),
    TALK_READING("Lesung"),
    THEATRE("Theater"),
    WORKSHOP("Workshop");
        
    public String eventTypeDescription;

    EventType(String eventTypeDescription) {
      this.eventTypeDescription = eventTypeDescription;
    }

    @JsonCreator
    public static EventType findValue(@JsonProperty("eventTypeDescription") String eventTypeDescription) {
        return Arrays.stream(EventType.values())
                .filter(element -> element.eventTypeDescription.equals(eventTypeDescription))
                .findFirst()
                .orElseThrow(NoSuchElementException::new);
    }
}