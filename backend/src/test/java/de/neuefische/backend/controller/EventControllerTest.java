package de.neuefische.backend.controller;

import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.EventSetting;
import de.neuefische.backend.model.EventType;
import de.neuefische.backend.repo.EventRepo;
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
                        .title("event1")
                        .description("description1")
                        .dateTime(LocalDateTime.of(2021, 1,1,10,0))
                        .eventSetting(EventSetting.OUTDOOR)
                        .eventTypes(List.of(
                                EventType.MUSIC.description
                        ))
                        .pictureUrl("picture1")
                        .infoUrl("info1")
                        .ticketUrl("ticket1")
                        .entranceFee(10.10)
                        .highlightEvent(false)
                        .build(),
                Event.builder()
                        .id("2")
                        .title("event2")
                        .description("description2")
                        .dateTime(LocalDateTime.of(2021,2,2,20,0))
                        .eventSetting(EventSetting.OUTDOOR)
                        .eventTypes(List.of(
                                EventType.MUSIC.description
                        ))
                        .pictureUrl("picture2")
                        .infoUrl("info2")
                        .ticketUrl("ticket2")
                        .entranceFee(20.20)
                        .highlightEvent(false)
                        .build()
        ));

        //When
        ResponseEntity<Event[]> response = testRestTemplate.getForEntity("http://localhost:" + port + "/events", Event[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Event.builder()
                        .id("1")
                        .title("event1")
                        .description("description1")
                        .dateTime(LocalDateTime.of(2021, 1,1,10,0))
                        .eventSetting(EventSetting.OUTDOOR)
                        .eventTypes(List.of(
                                EventType.MUSIC.description
                        ))
                        .pictureUrl("picture1")
                        .infoUrl("info1")
                        .ticketUrl("ticket1")
                        .entranceFee(10.10)
                        .highlightEvent(false)
                        .build(),
                Event.builder()
                        .id("2")
                        .title("event2")
                        .description("description2")
                        .dateTime(LocalDateTime.of(2021,2,2,20,0))
                        .eventSetting(EventSetting.OUTDOOR)
                        .eventTypes(List.of(
                                EventType.MUSIC.description
                        ))
                        .pictureUrl("picture2")
                        .infoUrl("info2")
                        .ticketUrl("ticket2")
                        .entranceFee(20.20)
                        .highlightEvent(false)
                        .build()
        ));
    }
}
