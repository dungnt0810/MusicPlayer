package com.dt.musicbe.controllers;

import com.dt.musicbe.entities.Genre;
import com.dt.musicbe.services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/genres")
@CrossOrigin
public class GenreController {
    @Autowired
    private GenreService genreService;

    @GetMapping("")
    public Iterable<Genre> getAllGenres() {

        return genreService.findall();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Genre> getGenreById(@PathVariable int id) {

        Genre genre = genreService.findById(id);
        return new ResponseEntity<>(genre, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Genre> getGenresByName(@PathVariable String name) {

        return genreService.findGenresByName(name);
    }
}
