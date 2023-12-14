package com.esprit.spring.service;


import com.esprit.spring.entities.Bloc;
import com.esprit.spring.repo.BlocRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlocService implements IBlocService{
    @Autowired
    BlocRepository blocRepository;


    @Override
    public List<Bloc> getAll(){
        return blocRepository.findAll();
    }

    @Override
    public Bloc addBloc(Bloc bloc){
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc updateBloc(Bloc bloc){
        Bloc b = blocRepository.findById(bloc.getIdBloc()).get();
        b.setNomBloc(bloc.getNomBloc());
        b.setCapaciteBloc(bloc.getCapaciteBloc());
        return blocRepository.save(b);
    }

    @Override
    public void deleteBloc(Long id){
        blocRepository.deleteById(id);
    }


}
