package com.esprit.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@SpringBootApplication
@EnableEurekaClient
public class APIGatewayMainApplication implements WebFluxConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(APIGatewayMainApplication.class, args);
    }


}
