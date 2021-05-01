package com.dt.musicbe.entities;
// Generated Apr 2, 2021, 3:12:12 PM by Hibernate Tools 5.1.10.Final

import com.dt.musicbe.annotation.JacksonIdSerializer;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;

import java.util.List;
import javax.persistence.*;
import static javax.persistence.GenerationType.IDENTITY;


@Entity
@Data
@Table(name = "song", catalog = "music_db")
public class Song  {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	@JacksonIdSerializer
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "album_id", nullable = false)
	private Album album;

	@JacksonIdSerializer
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "artist_id", nullable = false)
	private Artist artist;

	@Column(name = "name", nullable = false, length = 250)
	private String name;

	@Column(name = "link", nullable = false, length = 250)
	private String link;

	@JacksonIdSerializer
	@ManyToMany(fetch = FetchType.LAZY,
			cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(name = "song_genre",
			joinColumns = @JoinColumn(name = "song_id"),
			inverseJoinColumns = @JoinColumn(name = "genre_id"))
	private List<Genre> genres = new ArrayList<>();

	@JacksonIdSerializer
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "songs")
	private List<Playlist> playlists = new ArrayList<>();

	public void addPlaylist(Playlist playlist) {
		this.playlists.add(playlist);
	}

	public void removePlaylist(Playlist playlist) {
		this.playlists.remove(playlist);
	}

	public void addGenre(Genre genre) {
		this.genres.add(genre);
	}

	public void removeGenre(Genre genre) {
		this.genres.remove(genre);
	}
}
