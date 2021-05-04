package com.dt.musicbe.entities;


import com.dt.musicbe.annotation.JacksonIdSerializer;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@RequiredArgsConstructor
@Getter
@Setter
@Table(name = "user", catalog = "music_db")
public class User implements Serializable {

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	@NotBlank(message = "Username should not be blank")
	@Size(min = 3, message = "Username should be more than 3 characters")
	@Column(name = "username", nullable = false, length = 250)
	private String username;

	@NotBlank(message = "Password should not be blank")
	@Column(name = "password", nullable = false, length = 250)
	private String password;

	@NotBlank(message = "Full name should not be blank")
	@Column(name = "fullname", nullable = false, length = 250)
	private String fullname;


	@JacksonIdSerializer
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
	private List<Playlist> playlists = new ArrayList<>();

	public void addPlaylist(Playlist playlist) {
		this.playlists.add(playlist);
	}

	public void removePlaylist(Playlist playlist) {
		this.playlists.remove(playlist);
	}

}
