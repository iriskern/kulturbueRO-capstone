package de.neuefische.backend.controller;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.Location;
import de.neuefische.backend.model.Address;
import de.neuefische.backend.model.EventSetting;
import de.neuefische.backend.model.EventType;
import de.neuefische.backend.repos.EventRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class EventControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private EventRepo eventRepo;

    @BeforeEach
    public void clearDatabase() {
        eventRepo.deleteAll();
    }

    @Test
    @DisplayName("List all events")
    public void listAllEventsTest() {
        //Given
        eventRepo.saveAll(List.of(
                Event.builder()
                        .id("1")
                        .title("Dicht & Ergreifend")
                        .dateTime(LocalDateTime.of(2021, 8, 5, 20, 0))
                        .location(Location.builder().id("1").name("Mangfallpark").address(Address.builder().city("Rosenheim").build()).build())
                        .eventSetting(EventSetting.OUTDOOR)
                        .picture("testurl1")
                        .eventTypes(List.of(EventType.MUSIC))
                        .build(),
                Event.builder()
                        .id("2")
                        .title("OpenAir Kino: Unterwegs mit Jacqueline")
                        .dateTime(LocalDateTime.of(2021, 7, 22, 19, 0))
                        .location(Location.builder().id("2").name("Am Salzstadl").address(Address.builder().city("Rosenheim").build()).build())
                        .eventSetting(EventSetting.OUTDOOR)
                        .picture("testurl2")
                        .eventTypes(List.of(EventType.CINEMA))
                        .build()
        ));


        //When
        ResponseEntity<Event[]> response = testRestTemplate.getForEntity("http://localhost:" + port + "/events", Event[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Event.builder()
                        .id("1")
                        .title("Dicht & Ergreifend")
                        .dateTime(LocalDateTime.of(2021, 8, 5, 20, 0))
                        .location(Location.builder().id("1").name("Mangfallpark").address(Address.builder().city("Rosenheim").build()).build())
                        .eventSetting(EventSetting.OUTDOOR)
                        .picture("testurl1")
                        .eventTypes(List.of(EventType.MUSIC))
                        .build(),
                Event.builder()
                        .id("2")
                        .title("OpenAir Kino: Unterwegs mit Jacqueline")
                        .dateTime(LocalDateTime.of(2021, 7, 22, 19, 0))
                        .location(Location.builder().id("2").name("Am Salzstadl").address(Address.builder().city("Rosenheim").build()).build())
                        .eventSetting(EventSetting.OUTDOOR)
                        .picture("testurl2")
                        .eventTypes(List.of(EventType.CINEMA))
                        .build()
        ));
    }
}