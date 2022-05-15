// JavaScript source code
export const authEndpoint = "https://accounts.spotify.com/authorize";

//const redirectUri = "http://localhost:3000/";
const redirectUri = "https://music-app-6ec69.web.app/";

const clientId = "c9918b03e0a04d8ea026f7b901a9eece";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

/*
 1. click login button
 2. redirect to spotify login page
 3. Redirect to home page once logged in

 */

//string intepolation => usage of the back-tick to user both stink and
// react js code.


//pulling the access token
export const getTokenFromUrl = () => {
    console.log(window.location.hash);

    return window.location.hash
        .substring(1)   // #access_token=BQDsbF5...
        .split('&')     // access_token=BQDsbF5&token_type=Bearer&...
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            //console.log(initial);
            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;