package de.neuefische.backend.model;

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

    public final String description;

    EventType(String description) {
      this.description = description;
    }
}