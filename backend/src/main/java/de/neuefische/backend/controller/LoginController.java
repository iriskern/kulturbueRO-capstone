package de.neuefische.backend.controller;

import de.neuefische.backend.dto.LoginDataDto;
import de.neuefische.backend.security.service.JwtUtilsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/auth/login")
@RequiredArgsConstructor
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtilsService jwtUtilsService;

    @PostMapping
    public String login(@RequestBody LoginDataDto loginDataDto){
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(loginDataDto.getUsername(), loginDataDto.getPassword());
        authenticationManager.authenticate(authentication);

        return jwtUtilsService.createToken(new HashMap<>(), loginDataDto.getUsername());
    }
}
