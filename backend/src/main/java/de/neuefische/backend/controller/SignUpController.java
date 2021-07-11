package de.neuefische.backend.controller;

import de.neuefische.backend.dto.SignUpDataDto;
import de.neuefische.backend.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/signup")
public class SignUpController {

    private final SignUpService signUpService;

    @Autowired
    public SignUpController(SignUpService signUpService) {
        this.signUpService = signUpService;
    }

    @PostMapping
    public boolean signUp(@RequestBody SignUpDataDto signUpData){
        return signUpService.signUp(signUpData);
    }
}
