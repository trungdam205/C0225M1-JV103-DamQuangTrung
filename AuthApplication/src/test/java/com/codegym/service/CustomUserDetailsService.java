package com.codegym.service;

import com.codegym.entity.User;
import com.codegym.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.security.core.userdetails.*;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CustomUserDetailsServiceTest {

    @Mock
    private UserRepository userRepository;

    private CustomUserDetailsService customUserDetailsService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        customUserDetailsService = new CustomUserDetailsService(userRepository);
    }

    @Test
    @DisplayName("Tải user thành công từ username")
    void loadUserByUsername_success() {
        User u = new User(1L, "alice", "encodedpass", "Alice", true);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(u));

        UserDetails userDetails = customUserDetailsService.loadUserByUsername("alice");

        assertNotNull(userDetails);
        assertEquals("alice", userDetails.getUsername());
        assertEquals("encodedpass", userDetails.getPassword());
        assertTrue(userDetails.isEnabled());
    }

    @Test
    @DisplayName("Tải user thất bại khi không tồn tại username")
    void loadUserByUsername_notFound() {
        when(userRepository.findByUsername("bob")).thenReturn(Optional.empty());

        assertThrows(UsernameNotFoundException.class, () ->
                customUserDetailsService.loadUserByUsername("bob"));
    }
}
