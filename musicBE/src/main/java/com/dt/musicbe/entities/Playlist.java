package com.dt.musicbe.entities;

import com.dt.musicbe.annotation.JacksonIdSerializer;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.*;
import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Data
@Table(name = "playlist", catalog = "music_db")
public class Playlist{

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	@JacksonIdSerializer
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@Column(name = "name", nullable = false, length = 250)
	private String name;

	@Temporal(TemporalType.DATE)
	@Column(name = "created_at", nullable = false, length = 10)
	private Date createdAt;

	@Temporal(TemporalType.DATE)
	@Column(name = "update_at", nullable = false, length = 10)
	private Date updateAt;

	@JacksonIdSerializer
	@ManyToMany(fetch = FetchType.LAZY,
			cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(name = "song_playlist",
			joinColumns = @JoinColumn(name = "playlist_id"),
			inverseJoinColumns = @JoinColumn(name = "song_id"))
	private List<Song> songs = new ArrayList<>();

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updateAt = new Date();
	}

	public void addSong(Song song) {
		this.songs.add(song);
	}

	public void removeSong(Song song) {
		this.songs.remove(song);
	}
}
