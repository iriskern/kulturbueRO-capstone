package de.neuefische.backend.service;

import de.neuefische.backend.dto.SignUpDataDto;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repo.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {

    private final AppUserRepo appUserRepo;
    private final PasswordEncoder encoder;

    @Autowired
    public SignUpService(AppUserRepo appUserRepo, PasswordEncoder encoder) {
        this.appUserRepo = appUserRepo;
        this.encoder = encoder;
    }

    public boolean signUp(SignUpDataDto signUpData) {
        if(appUserRepo.existsById(signUpData.getUsername()) ||
                signUpData.getUsername().length() < 4 ||
                signUpData.getPassword().length() < 4 ||
                !signUpData.getPassword().equals(signUpData.getPasswordCheck())
        ) {
            return false;
        }

        appUserRepo.save(AppUser.builder()
                .username(signUpData.getUsername())
                .password(encoder.encode(signUpData.getPassword()))
                .build());
        return appUserRepo.existsById(signUpData.getUsername());
    }
}
