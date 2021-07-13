package de.neuefische.backend.security.service;

import de.neuefische.backend.security.repo.AppUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppUserDetailsService implements UserDetailsService {

    private final AppUserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repo.findById(username)
                .map(appUser -> User
                        .withUsername(username)
                        .password(appUser.getPassword())
                        .authorities("User")
                        .build())
                .orElseThrow(() -> new UsernameNotFoundException("username does not exist: "+username));
    }
}
