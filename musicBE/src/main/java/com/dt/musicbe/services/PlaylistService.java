package com.dt.musicbe.services;

import com.dt.musicbe.entities.Album;
import com.dt.musicbe.entities.Playlist;
import com.dt.musicbe.entities.Song;
import com.dt.musicbe.entities.User;
import com.dt.musicbe.exception.AlreadyExistsException;
import com.dt.musicbe.exception.NotFoundException;
import com.dt.musicbe.exception.UnauthorizedUserException;
import com.dt.musicbe.repositories.AlbumRepository;
import com.dt.musicbe.repositories.PlaylistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaylistService {

    @Autowired
    private PlaylistRepository playlistRepository;
    private SongService songService;
    private UserService userService;

    public Playlist findPlaylistByIdAndUser(int id, User user) {

        Playlist playlist = playlistRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Playlist ID: %s does not exist", id)));

        if (!playlist.getUser().getId().equals(user.getId())) {
            throw new UnauthorizedUserException(String.format("User: %s is not authorized to access playlist ID: %s",
                    user.getUsername(), id));
        }

        return playlist;
    }

    public Iterable<Playlist> findAllPlaylistsByUser(User user) {
        user = userService.findUserById(user.getId());
        return user.getPlaylists();
    }

    @Transactional
    public Iterable<Playlist> findPlaylistsByNameAndUser(String name, User user) {
        user = userService.findUserById(user.getId());

        Predicate<Playlist> byContainsName = playlist -> playlist.getName().toLowerCase()
                .contains(name.toLowerCase());

        return user.getPlaylists()
                .stream()
                .filter(byContainsName)
                .collect(Collectors.toList());
    }

    public Playlist savePlaylist(String name, User user) {

        user = userService.findUserById(user.getId());

        Playlist playlist = new Playlist();
        playlist.setName(name);
        playlist.setUser(user);

        return playlistRepository.save(playlist);
    }

    public Playlist updatePlaylistById(String name, int id, User user) {
        user = userService.findUserById(user.getId());
        Playlist playlist = findPlaylistByIdAndUser(id, user);
        playlist.setName(name);

        return playlistRepository.save(playlist);
    }

    public void deletePlaylistById(int id, User user) {

        user = userService.findUserById(user.getId());

        Playlist playlist = findPlaylistByIdAndUser(id, user);

        playlistRepository.delete(playlist);
    }

    public Playlist addSongById(int playlistId, int songId, User user) {

        user = userService.findUserById(user.getId());
        Playlist playlist = findPlaylistByIdAndUser(playlistId, user);

        Song song = songService.findById(songId);
        if (playlist.getSongs().contains(song)) {
            throw new AlreadyExistsException(String.format("Song: %s already exists in playlist: %s",
                    song.getName(), playlist.getName()));
        }
        playlist.addSong(song);

        return playlistRepository.save(playlist);
    }

    public Playlist removeSongById(int playlistId, int songId, User user) {

        user = userService.findUserById(user.getId());
        Playlist playlist = findPlaylistByIdAndUser(playlistId, user);

        Song song = songService.findById(songId);
        if (!playlist.getSongs().contains(song)) {
            throw new NotFoundException(String.format("Song: %s not found in playlist: %s",
                    song.getName(), playlist.getName()));
        }
        playlist.removeSong(song);

        return playlistRepository.save(playlist);
    }
}
