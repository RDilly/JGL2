import React, { Component } from "react"
import UserCard from "./UserCard"


export default class UserView extends Component {

    componentDidMount() {
        console.log("test")
    }

    render() {
        const userId = parseInt(sessionStorage.getItem("credentials"))
        const history = this.props.history;
        return (
            <React.Fragment>
                <article className="card movies card">
                {
                    this.props.ratings.filter(ratings => ratings.userId === userId)
                    .map(rating =>
                        this.props.movies.filter(movies => movies.id === rating.movieId).map(movie=>
                        <UserCard {...this.props}
                        key={`Movie-${rating.id}`}
                            ratings={this.props.ratings}
                            movies={this.props.movies}
                            rating={rating}
                            movie={movie}
                            getPosterURL={this.props.getPosterURL}
                            />
                    ))
                }
                </article>
            </React.Fragment>
        )
    }
}
