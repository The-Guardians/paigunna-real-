package com.paigunna.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

/**
 * @author Arm
 */
@SpringBootApplication
@EnableSpringDataWebSupport
@ComponentScan(basePackages = {"com.paigunna.api", "com.paigunna.api.service"})
@EntityScan(basePackages = "com.paigunna.api.domain")

public class PaigunnaApi {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(PaigunnaApi.class, args);
    }
}
