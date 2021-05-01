package com.dt.musicbe.repositories;

import com.dt.musicbe.entities.Album;
import com.dt.musicbe.entities.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {

    @Query("from Artist where name like %:name%")
    Iterable<Artist> findByName(@Param("name") String name);
}
