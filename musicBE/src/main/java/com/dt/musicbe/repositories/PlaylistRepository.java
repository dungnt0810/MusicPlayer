package com.dt.musicbe.repositories;

import com.dt.musicbe.entities.Album;
import com.dt.musicbe.entities.Playlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Integer> {

    @Query("from Playlist where name like %:name%")
    Iterable<Playlist> findByName(@Param("name") String name);
}
