import React, { Component } from "react"
import UserCard from "./UserCard"
import SearchMovies from "./SearchMovies"
import { Container, Row, Col, CardColumns } from 'reactstrap';



export default class UserView extends Component {

    componentDidMount() {
        console.log("test")
    }

    render() {
        const userId = parseInt(sessionStorage.getItem("credentials"))
        const history = this.props.history;
        return (
            <React.Fragment>
                <SearchMovies {...this.props}/>
                <CardColumns>

                {
                    this.props.ratings.filter(ratings => ratings.userId === userId)
                    .map(rating =>
                        this.props.movies.filter(movies => movies.id === rating.movieId).map(movie =>
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

                </CardColumns>   
            </React.Fragment>
        )
    }
}
