package com.esprit.spring.service;

import com.esprit.spring.entities.Bloc;

import java.util.List;

public interface IBlocService {
    List<Bloc> getAll();

    Bloc addBloc(Bloc bloc);

    Bloc updateBloc(Bloc bloc);

    void deleteBloc(Long id);
}
