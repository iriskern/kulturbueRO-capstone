package de.neuefische.backend.controller;

import de.neuefische.backend.dto.LoginData;
import de.neuefische.backend.model.Event;
import de.neuefische.backend.model.EventSetting;
import de.neuefische.backend.repo.EventRepo;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repo.AppUserRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=some-jwt-secret")
class EventControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private AppUserRepo appUserRepo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private EventRepo eventRepo;

    @BeforeEach
    public void clearDatabase() {
        eventRepo.deleteAll();
    }

    private HttpHeaders login() {
        appUserRepo.save(AppUser.builder()
                .username("Bob")
                .password(encoder.encode("1234"))
                .build());
        LoginData loginData = new LoginData("Bob", "1234");

        ResponseEntity<String> response = testRestTemplate.postForEntity("http://localhost:"+port+"/auth/login", loginData, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(Objects.requireNonNull(response.getBody()));
        return headers;
    }

    @Test
    public void listAllEventsTest() {
        //Given
        eventRepo.saveAll(List.of(
                Event.builder()
                        .id("1")
                        .title("event1")
                        .description("description1")
                        .dateTime(LocalDateTime.of(2021, 1,1,10,0))
                        .eventSetting(EventSetting.OUTDOOR)
                        .eventTypes(List.of("Musik"))
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
                        .eventTypes(List.of("Musik"))
                        .pictureUrl("picture2")
                        .infoUrl("info2")
                        .ticketUrl("ticket2")
                        .entranceFee(20.20)
                        .highlightEvent(false)
                        .build()
        ));

        //When
        HttpHeaders headers = login();
        ResponseEntity<Event[]> response = testRestTemplate.exchange("http://localhost:"+port+"/events", HttpMethod.GET, new HttpEntity<>(headers), Event[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                Event.builder()
                        .id("1")
                        .title("event1")
                        .description("description1")
                        .dateTime(LocalDateTime.of(2021, 1,1,10,0))
                        .eventSetting(EventSetting.OUTDOOR)
                        .eventTypes(List.of("Musik"))
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
                        .eventTypes(List.of("Musik"))
                        .pictureUrl("picture2")
                        .infoUrl("info2")
                        .ticketUrl("ticket2")
                        .entranceFee(20.20)
                        .highlightEvent(false)
                        .build()
        ));
    }
}
