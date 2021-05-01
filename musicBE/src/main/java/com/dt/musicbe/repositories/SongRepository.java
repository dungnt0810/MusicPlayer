package com.dt.musicbe.repositories;

import com.dt.musicbe.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends JpaRepository<Song, Integer> {

    @Query("from Song where name like %:name%")
    Iterable<Song> findByName(@Param("name") String name);
}