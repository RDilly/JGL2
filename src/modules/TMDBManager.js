import Settings from "./Settings";

export default {

    get(id) {
        return fetch(`${Settings.remoteURL}/movies/${id}`).then(e => e.json());
    },

    deleteMovie(id) {
        return fetch(`${Settings.remoteURL}/movies/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },

    getPosterPath(TMId) {
      return fetch(`https://api.themoviedb.org/3/movie/${TMId}?api_key=520a8738d38542bfb404376806005d5a&language=en-US`)
      .then(e => e.json())
    },
    
    getPoster(poster_path) {
      return `https://image.tmdb.org/t/p/original/${poster_path}`
    },
    
};
