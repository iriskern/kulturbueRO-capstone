package de.neuefische.backend.controller;

import de.neuefische.backend.dto.SignUpDataDto;
import de.neuefische.backend.service.SignUpService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/signup")
@RequiredArgsConstructor
public class SignUpController {

    private final SignUpService signUpService;

    @PostMapping
    public boolean signUp(@RequestBody SignUpDataDto signUpData){
        return signUpService.signUp(signUpData);
    }
}
