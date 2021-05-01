package com.dt.musicbe.controllers;

import com.dt.musicbe.entities.Song;
import com.dt.musicbe.services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/stream/songs")
@CrossOrigin
public class SongController {
    @Autowired
    private SongService songService;

    @GetMapping("")
    public ResponseEntity<List<Song>> findAll() {
        try {
            return new ResponseEntity<>((List<Song>) songService.getAllSong(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> findById(@PathVariable("id") int id) {
        Song song = songService.findById(id);
        try {
            if (song != null) {
                return new ResponseEntity<>(song, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<List<Song>> getSongsByName(@PathVariable String name) {
        try {
            return new ResponseEntity<>((List<Song>) songService.findSongsByName(name), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
