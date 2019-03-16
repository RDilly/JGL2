import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/movies/${id}`).then(e => e.json());
    },
    deleteReview(id) {
        return fetch(`${Settings.remoteURL}/ratings/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getMovies() {
      return fetch(`${Settings.remoteURL}/movies`).then(e => e.json())
    },
    getUserMovies() {
      const activeUser = parseInt(sessionStorage.getItem("credentials"))
      return fetch(`${Settings.remoteURL}/movies?userId=${activeUser}&_sort=date&_order=asc`).then(e => e.json())
    },

    getRatings(movieId) {
      return fetch(`${Settings.remoteURL}/ratings`)
      .then(ratings => ratings.json())
    },

    addMovie(newMovie) {
        return fetch(`${Settings.remoteURL}/movies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newMovie)
        }).then(data => data.json())
    },

    addRating(newRating) {
      return fetch(`${Settings.remoteURL}/ratings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRating)
      }).then(data => data.json())
  },

    updateRating(editedRating) {
        return fetch(`${Settings.remoteURL}/ratings/${editedRating.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedRating)
        }).then(data => data.json());
    }
};
