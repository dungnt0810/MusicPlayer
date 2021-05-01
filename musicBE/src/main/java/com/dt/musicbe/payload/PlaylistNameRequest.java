package com.dt.musicbe.payload;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class PlaylistNameRequest {

    @NotBlank(message = "Playlist name cannot be blank")
    private String name;
}
