package com.dt.musicbe.services;

import com.dt.musicbe.entities.Artist;
import com.dt.musicbe.exception.NotFoundException;
import com.dt.musicbe.repositories.ArtistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ArtistService {

    @Autowired
    private ArtistRepository artistRepository;

    public Iterable<Artist> findall(){
        return artistRepository.findAll();
    }

    public Artist findById(int id) {

        return artistRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Artist ID: %s does not exist", id)));
    }


    public Iterable<Artist> findArtistsByName(String name){
        return artistRepository.findByName(name);
    }

}
