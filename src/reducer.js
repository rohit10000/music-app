export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    top_artists: null,
    spotify: null,
    //Remove after developing
    //token: "BQAYcF-NTkvaGpEYx1MNXMNZpUlqrOfAd_qR1YBE1f_M2FFI5MXWnZF3pQ5S9wEFKlvfDPTb2ejAKxiDSnwVmgKjaHu4cNZYKeV9m6lskemK711R8ZkPa91FU5d53avSwMVRW2DJvk_mOWeQCoYrWd9osO3k_4mBVQkauCalm9GRSrRQZBCB"
    token: null,
    discover_weekly: null
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        default:
            return state;
    }
}

export default reducer;