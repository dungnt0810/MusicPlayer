package com.dt.musicbe.repositories;

import com.dt.musicbe.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer> {

    @Query("from Genre where name like %:name%")
    Iterable<Genre> findByName(@Param("name") String name);
}
