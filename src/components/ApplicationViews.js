import React, { Component } from "react";
import { Route } from "react-router-dom";
import Gallery from "./gallery/gallery";
import RatingsManager from "../modules/RatingsManager";
import TMDBManager from "../modules/TMDBManager";
import UserManager from "../modules/UserManager";

export default class ApplicationViews extends Component {
    state = {
        movies: [],
        rats: [],
        users: [],
    }

    getPosterURL = (TMId) => {
       let poster_path = TMDBManager.getPosterPath(TMId);
        TMDBManager.getPoster(poster_path)
    }

    getMovies = () => {
        RatingsManager.getMovies()
            .then(movies => this.setState({ movies: movies }))
    }

    getRatings = () => {
        RatingsManager.getRatings()
            .then(ratings => this.setState({ ratings: ratings }))
    }

    componentDidMount() {
        const newState = {};

            UserManager.getAll()
            .then(users => newState.users = users)

            .then(() => RatingsManager.getMovies())
            .then(movies => newState.movies= movies)

            .then(() => RatingsManager.getRatings())
            .then(ratings => newState.ratings= ratings)

            .then(console.log(newState))
            .then(() => this.setState({
                movies: newState.movies,
                users: newState.users,
                rats: newState.ratings
            }))
            .then(() => console.log("state is:", this.state))
        }

    

    render() {
        return <React.Fragment>
            <Route path="/" render={props => {
                return <Gallery {...props}
                    users={this.state.users}
                    ratings={this.state.rats}
                    movies={this.state.movies}
                    getPosterURL={this.getPosterURL}
                    getMovies={this.getMovies}
                     />
            }}
             />
        </React.Fragment>
    }

}