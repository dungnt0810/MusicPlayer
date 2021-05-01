package com.dt.musicbe.controllers;

import com.dt.musicbe.entities.Album;
import com.dt.musicbe.services.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/albums")
@CrossOrigin
public class AlbumController {
    @Autowired
    private AlbumService albumService;

    @GetMapping("")
    public Iterable<Album> getAllAlbums() {

        return albumService.findall();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Album> getAlbumById(@PathVariable int id) {

        Album album = albumService.findAlbumById(id);
        return new ResponseEntity<>(album, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Album> getAlbumsByName(@PathVariable String name) {

        return albumService.findAlbumsByName(name);
    }
}
