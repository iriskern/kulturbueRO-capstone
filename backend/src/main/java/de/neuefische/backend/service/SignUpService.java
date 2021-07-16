package de.neuefische.backend.service;

import de.neuefische.backend.dto.SignUpDataDto;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repo.AppUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignUpService {

    private final AppUserRepo appUserRepo;
    private final PasswordEncoder encoder;

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
