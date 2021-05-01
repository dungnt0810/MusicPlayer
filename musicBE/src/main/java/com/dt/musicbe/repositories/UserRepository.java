package com.dt.musicbe.repositories;

import com.dt.musicbe.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("from User where username = :username")
    User findByUsername(@Param("username") String username);


}
