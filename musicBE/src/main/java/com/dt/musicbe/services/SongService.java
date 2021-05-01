package com.dt.musicbe.services;

import com.dt.musicbe.entities.Song;
import com.dt.musicbe.exception.NotFoundException;
import com.dt.musicbe.repositories.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    public Iterable<Song> getAllSong(){
        return songRepository.findAll();
    }

    public Song findById(int id){
        return songRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Song ID: %s does not exist", id)));
    }

    public Iterable<Song> findSongsByName(String name){
        return songRepository.findByName(name);
    }

}
