package com.dt.musicbe.services;

import com.dt.musicbe.entities.User;
import com.dt.musicbe.entities.UserPrincipal;
import com.dt.musicbe.exception.AlreadyExistsException;
import com.dt.musicbe.exception.NotFoundException;
import com.dt.musicbe.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.findUserByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException(String.format("User: %s does not exist", username));
        }
        return new UserPrincipal(user);
    }

    public User findUserById(int id) {

        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("User ID: %s does not exist", id)));
    }

    public User findUserByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public Iterable<User> findALl() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            throw new AlreadyExistsException(String.format("Username: %s already exists", user.getUsername()));
        }
    }
}
