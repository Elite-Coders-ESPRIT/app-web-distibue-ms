package com.esprit.spring;

import com.esprit.spring.entity.Universite;
import com.esprit.spring.repository.UniversiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
@EnableDiscoveryClient
@SpringBootApplication
@EnableEurekaClient
public class MainSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(MainSpringApplication.class, args);
    }
    @Autowired
    private UniversiteRepository universiteRepository;
    @Bean
    ApplicationRunner init() {// pour lancement de l'app
        return (args) -> {
            universiteRepository.findAll().forEach(System.out::println);

        };
    }


}
