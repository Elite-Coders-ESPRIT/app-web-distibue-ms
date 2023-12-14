package com.esprit.spring.controller;


import com.esprit.spring.entities.Bloc;
import com.esprit.spring.service.IBlocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bloc")
@CrossOrigin(origins = "*")
public class BlocRestAPI {

    private final String title="Hello, I am the bloc microservice !";

    @Autowired
    IBlocService blocService;

    @RequestMapping("/hello")
    public String sayHello(){
        return title;
    }

    @GetMapping("/")
    public List<Bloc> getAllBlocs(){
        return blocService.getAll();
    }

    @PostMapping("/")
    public Bloc insertBloc(@RequestBody Bloc b){
        return blocService.addBloc(b);
    }

    @PutMapping("/")
    public Bloc updateBloc(@RequestBody Bloc b){
        return blocService.updateBloc(b);
    }

    @DeleteMapping("/{id}")
    public void deleteBloc(@PathVariable("id")Long id){
        blocService.deleteBloc(id);
    }

}
