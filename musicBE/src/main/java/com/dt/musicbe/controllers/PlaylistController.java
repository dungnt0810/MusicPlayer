package com.dt.musicbe.controllers;

import com.dt.musicbe.entities.Playlist;
import com.dt.musicbe.entities.User;
import com.dt.musicbe.payload.PlaylistNameRequest;
import com.dt.musicbe.services.PlaylistService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/playlists")
@CrossOrigin
@RequiredArgsConstructor
public class PlaylistController {
    @Autowired
    private PlaylistService playlistService;

    @GetMapping("")
    public Iterable<Playlist> getAllPlaylists(Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        return playlistService.findAllPlaylistsByUser(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPlaylistById(@PathVariable int id, Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Playlist playlist = playlistService.findPlaylistByIdAndUser(id, user);
        return new ResponseEntity<>(playlist, HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public Iterable<Playlist> getPlaylistsByName(@PathVariable String name, Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        return playlistService.findPlaylistsByNameAndUser(name, user);
    }

    @PostMapping("")
    public ResponseEntity<?> createPlaylistById(@Valid @RequestBody PlaylistNameRequest playlistNameRequest,
                                                Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Playlist playlist = playlistService.savePlaylist(playlistNameRequest.getName(), user);
        return new ResponseEntity<>(playlist, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updatePlaylistById(@PathVariable int id, @Valid @RequestBody PlaylistNameRequest playlistNameRequest,
                                                Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Playlist playlist = playlistService.updatePlaylistById(playlistNameRequest.getName(), id, user);
        return new ResponseEntity<>(playlist, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePlaylistById(@PathVariable int id, Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        playlistService.deletePlaylistById(id, user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{playlistId}/song/{songId}")
    public ResponseEntity<?> addSongToPlaylistById(@PathVariable int playlistId, @PathVariable int songId,
                                                   Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Playlist playlist = playlistService.addSongById(playlistId, songId, user);
        return new ResponseEntity<>(playlist, HttpStatus.OK);
    }

    @DeleteMapping("/{playlistId}/song/{songId}")
    public ResponseEntity<?> removeSongFromPlaylistById(@PathVariable int playlistId, @PathVariable int songId,
                                                        Authentication authentication) {

        User user = (User) authentication.getPrincipal();
        Playlist playlist = playlistService.removeSongById(playlistId, songId, user);
        return new ResponseEntity<>(playlist, HttpStatus.OK);
    }
}
