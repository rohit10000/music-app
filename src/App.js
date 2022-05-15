import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

    const [{ user, token}, dispatch] = useDataLayerValue();

    //Run code based on the given condition
    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        console.log("DEBUG hash: ", hash);
        const _token = hash.access_token;
        if (_token) {

            spotify.setAccessToken(_token);

            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            })
            
            spotify.getMe()
                .then(user => {

                    dispatch({
                        type: 'SET_USER',
                        user,
                    })
                });

            spotify.getMyTopArtists().then((response) =>
                dispatch({
                    type: "SET_TOP_ARTISTS",
                    top_artists: response,
                })
            );

            dispatch({
                type: "SET_SPOTIFY",
                spotify: spotify,
            });

            spotify.getPlaylist('6RTZ6uU7ymbZhVhmdMJK4h')
                .then((response) => {
                    dispatch({
                        type: 'SET_DISCOVER_WEEKLY',
                        discover_weekly: response
                    })
                });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists
                })
            });
        }

    }, []);

    //console.log("Added user:", user);
    //console.log("Added token:", token);

  return (
    <div className="App">
          {
              token ? (<Player spotify={spotify}/>) : (<Login/>)
          }
    </div>
  );
}

export default App;
