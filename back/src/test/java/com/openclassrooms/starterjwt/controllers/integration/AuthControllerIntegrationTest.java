package com.openclassrooms.starterjwt.controllers.integration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.openclassrooms.starterjwt.models.User;
import com.openclassrooms.starterjwt.payload.request.LoginRequest;
import com.openclassrooms.starterjwt.repository.UserRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc //Configure MockMvc pour tester les API REST.
public class AuthControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach //Exécuté avant chaque test.
    public void setUp() {
        userRepository.deleteAll();
        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword(passwordEncoder.encode("password"));
        userRepository.save(user);
    }

    @Test
    public void whenValidInput_thenReturns200() throws Exception {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail("test@example.com");
        loginRequest.setPassword("password");

        mockMvc.perform(post("/api/auth/login")//Simule une requête HTTP.
                .contentType(MediaType.APPLICATION_JSON)//Définit le format JSON.
                .content(objectMapper.writeValueAsString(loginRequest)))//Convertit un objet Java en JSON.
                .andExpect(status().isOk());//Vérifie que la réponse est 200 OK.
    }
}