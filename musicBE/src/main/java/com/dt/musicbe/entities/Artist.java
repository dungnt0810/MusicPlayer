package com.dt.musicbe.entities;

import com.dt.musicbe.annotation.JacksonIdSerializer;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.*;
import static javax.persistence.GenerationType.IDENTITY;


@Entity
@Data
@Table(name = "artist", catalog = "music_db")
public class Artist{

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	@Column(name = "name", nullable = false, length = 250)
	private String name;

	@Column(name = "photo_url", nullable = false, length = 250)
	private String photoUrl;

	@JacksonIdSerializer
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "artist", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Album> albums = new ArrayList<>();

	@JacksonIdSerializer
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "artist", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Song> songs = new ArrayList<>();

	public void addAlbum(Album album) {
		this.albums.add(album);
	}

	public void removeAlbum(Album album) {
		this.albums.remove(album);
	}

	public void addSong(Song song) {
		this.songs.add(song);
	}

	public void removeSong(Song song) {
		this.songs.remove(song);
	}
}
