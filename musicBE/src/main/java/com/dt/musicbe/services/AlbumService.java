package com.dt.musicbe.services;

import com.dt.musicbe.entities.Album;
import com.dt.musicbe.exception.NotFoundException;
import com.dt.musicbe.repositories.AlbumRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    public Iterable<Album> findall(){
        return albumRepository.findAll();
    }

    public Album findAlbumById(int id) {

        return albumRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Album ID: %s does not exist", id)));
    }

    public Iterable<Album> findAlbumsByName(String name){
        return albumRepository.findByName(name);
    }

}
