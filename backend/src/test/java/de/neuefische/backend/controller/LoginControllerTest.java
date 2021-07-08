package de.neuefische.backend.controller;

import de.neuefische.backend.dto.LoginDataDto;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repo.AppUserRepo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "jwt.secret=some-jwt-secret")
class LoginControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private AppUserRepo appUserRepo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private TestRestTemplate restTemplate;


    @Test
    public void loginWithValidCredentialsShouldReturnValidJwtToken() {
        //Given
        appUserRepo.save(AppUser.builder()
                .username("Bob")
                .password(encoder.encode("1234"))
                .build());

        //When
        LoginDataDto loginDataDto = new LoginDataDto("Bob", "1234");
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:"+port+"/auth/login", loginDataDto, String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        Claims body = Jwts.parser().setSigningKey("some-jwt-secret").parseClaimsJws(response.getBody()).getBody();
        assertThat(body.getSubject(), is("Bob"));
    }

    @Test
    public void loginWithInvalidCredentialsShouldReturnNoToken() {
        //Given
        appUserRepo.save(AppUser.builder()
                .username("Bob")
                .password(encoder.encode("1234"))
                .build());

        //When
        LoginDataDto loginDataDto = new LoginDataDto("Bob", "wrongPassword");
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:"+port+"/auth/login", loginDataDto, String.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.FORBIDDEN));
    }
}