package com.dt.musicbe.services;

import com.dt.musicbe.entities.Genre;
import com.dt.musicbe.exception.NotFoundException;
import com.dt.musicbe.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    public Iterable<Genre> findall(){
        return genreRepository.findAll();
    }

    public Genre findById(int id){
        return genreRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Genre ID: %s does not exist", id)));
    }

    public Iterable<Genre> findGenresByName(String name){
        return genreRepository.findByName(name);
    }

}
