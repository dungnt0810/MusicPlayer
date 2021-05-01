package com.dt.musicbe.controllers;

import com.dt.musicbe.entities.User;
import com.dt.musicbe.payload.JWTLoginSuccessResponse;
import com.dt.musicbe.payload.LoginRequest;
import com.dt.musicbe.security.JwtTokenProvider;
import com.dt.musicbe.services.UserService;

import com.dt.musicbe.validator.PasswordValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

import static com.dt.musicbe.security.SecurityConstants.TOKEN_PREFIX;


@RestController
@RequestMapping("api/users")
@CrossOrigin
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final PasswordValidator passwordValidator;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

//    @GetMapping("/findall")
//    public Iterable<User> getAllSongs() {
//
//        return userService.findALl();
//    }

    @PostMapping("/authentication/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) throws Exception{
        Authentication authentication;
        try {
          authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getUsername(),
                            loginRequest.getPassword()
                    )
            );
        }catch (BadCredentialsException e){
            throw new Exception("Incorrect username or password",e);
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + jwtTokenProvider.generateToken(authentication);

        JWTLoginSuccessResponse jwtResponse = new JWTLoginSuccessResponse(true, jwt);
        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }

    @PostMapping("/authentication/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {

        passwordValidator.validate(user, result);

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        User newUser = userService.saveUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }


}
