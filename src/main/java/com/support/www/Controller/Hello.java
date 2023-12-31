package com.support.www.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
    @GetMapping("/dbtest")
    public String dbtest() {
        return "Hello, world!";
    }
}