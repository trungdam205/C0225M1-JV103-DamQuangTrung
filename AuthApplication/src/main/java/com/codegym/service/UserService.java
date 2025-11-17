package com.codegym.service;

import com.codegym.entity.User;
import com.codegym.exception.CustomException;
import com.codegym.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repo;
    private final PasswordEncoder encoder;

    public User register(String username, String rawPassword, String fullName) {
        if (repo.existsByUsername(username)) {
            throw new CustomException("Username already exists", 400);
        }
        User user = User.builder()
                .username(username)
                .password(encoder.encode(rawPassword))
                .fullName(fullName)
                .enabled(true)
                .build();
        return repo.save(user);
    }
}
