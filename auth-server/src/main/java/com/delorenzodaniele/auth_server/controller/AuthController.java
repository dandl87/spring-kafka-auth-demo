package com.delorenzodaniele.auth_server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/test")
    public String test(@RequestParam String code) {
        return "Code: " + code;
    }
}
