import RatingsManager from "../../modules/RatingsManager"
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import { get } from "http";
import "./user.css"
import "../../../node_modules/react-star-rating/dist/css/react-star-rating.min.css"


export default class UserCard extends Component {

    

    componentDidMount() {
        console.log(this.props.ratings)
        console.log(this.props.rating)
        console.log(this.props.movie)
    }

    render() {
        let title = this.props.movie.title
        let movieId = this.props.movie.id
        let TMId = this.props.movie.TMId
        let ppURL = "https://image.tmdb.org/t/p/original/"

        let URLpp = this.props.movie.posterPath
        let fullPosterPath = `${ppURL}${URLpp}`
        let stars = this.props.rating.stars

        console.log(this.props.rating)
        console.log(TMId)
        console.log(movieId)
        return (
            <div>
                <h3>{title}</h3>
                <img className="poster" src={fullPosterPath} alt="movieposter"/>
                <div>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={stars}
                    />
                </div>
                <p>{this.props.rating.memo}</p>
            </div>

        );
    }
}
