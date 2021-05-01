package com.dt.musicbe.controllers;

import com.dt.musicbe.entities.Artist;
import com.dt.musicbe.services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/artists")
@CrossOrigin
public class ArtistController {
    @Autowired
    private ArtistService artistService;

    @GetMapping("")
    public Iterable<Artist> getAllArtists() {

        return artistService.findall();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getArtistById(@PathVariable int id) {

        Artist artist = artistService.findById(id);
        return new ResponseEntity<>(artist, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Artist> getArtistsByName(@PathVariable String name) {

        return artistService.findArtistsByName(name);
    }
}
