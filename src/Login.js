// JavaScript source code

import React from "react";
import "./Login.css";
import { loginUrl } from './Spotify';

function Login() {
    return (
        <div className='login'>
            <img src="https://i.pinimg.com/originals/ae/2e/56/ae2e5651b74a00d5d31b8c6453fa3ebb.png"
                alt="" />

            <a href={loginUrl}> LOGGING IN </a>
        </div>
        )
}

export default Login;

// Helpful links: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/