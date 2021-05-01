package com.dt.musicbe.entities;

import com.dt.musicbe.annotation.JacksonIdSerializer;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;


@Entity
@Data
@Table(name = "genre", catalog = "music_db")
public class Genre {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	@Column(name = "name", nullable = false, length = 250)
	private String name;

	@Column(name = "photo_url", nullable = false, length = 250)
	private String photoUrl;

	@JacksonIdSerializer
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "genres")
	private List<Song> songs = new ArrayList<>();

	public void addSong(Song song) {
		this.songs.add(song);
	}

	public void removeSong(Song song) {
		this.songs.remove(song);
	}
}
