package com.codegym.service;

import com.codegym.entity.User;
import com.codegym.exception.CustomException;
import com.codegym.repository.UserRepository;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    private UserService userService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
        userService = new UserService(userRepository, passwordEncoder);
    }

    @Test
    @DisplayName("Đăng ký thành công khi username chưa tồn tại")
    void register_success() {
        when(userRepository.existsByUsername("alice")).thenReturn(false);
        when(passwordEncoder.encode("123")).thenReturn("encoded123");
        when(userRepository.save(any(User.class)))
                .thenAnswer(inv -> inv.getArgument(0)); // trả lại user đã truyền vào

        User user = userService.register("alice", "123", "Alice Nguyen");

        assertNotNull(user);
        assertEquals("alice", user.getUsername());
        assertEquals("encoded123", user.getPassword());
        verify(userRepository).save(any(User.class));
    }

    @Test
    @DisplayName("Đăng ký thất bại khi username đã tồn tại")
    void register_usernameExists_throwsCustomException() {
        when(userRepository.existsByUsername("bob")).thenReturn(true);

        CustomException ex = assertThrows(CustomException.class, () ->
                userService.register("bob", "123", "Bob"));

        assertEquals(400, ex.getStatus());
        assertEquals("Username already exists", ex.getMessage());
    }
}
