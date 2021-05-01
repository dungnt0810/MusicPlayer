package com.dt.musicbe.repositories;

import com.dt.musicbe.entities.Album;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Integer> {

    @Query("from Album where name like %:name%")
    Iterable<Album> findByName(@Param("name") String name);
}
