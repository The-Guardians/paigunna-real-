package com.paigunna.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Arm
 */

@Controller
@RequestMapping("/")
public class HomeController {
    @GetMapping
    private String home() {

        return "index.html";
    }
}
