import RatingsManager from "../../modules/RatingsManager"
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import { get } from "http";
import "./gallery.css"
import "../../../node_modules/react-star-rating/dist/css/react-star-rating.min.css"


export default class GalleryCard extends Component {

    componentDidMount() {
        console.log(this.props.movies)
        console.log(this.props.movie)
    }

    render() {
        let title = this.props.movie.title
        let movieId = this.props.movie.id
        let TMId = this.props.movie.TMId
        let ppURL = "https://image.tmdb.org/t/p/original/"

        let URLpp = this.props.movie.posterPath
        let fullPosterPath = `${ppURL}${URLpp}`
        let ratings = this.props.ratings.filter(ratings => ratings.movieId === movieId)
        

        console.log(ratings)
        console.log(TMId)
        console.log(movieId)
        if (ratings.length == 0) {
            console.log("if")
            return (
                <div>
                    <h3>{title}</h3>
                    <img class="poster" src={fullPosterPath} />
                    <div>
                    </div>
                </div>
    
            );
            
        } else {
            console.log("else")
            let starsArray = []
            ratings.forEach(rating => {
                starsArray.push(rating.stars)
            });
            let sum = starsArray.reduce((previous, current) => current += previous);
            let avg = sum / starsArray.length;
            console.log("starsArray", starsArray)
            console.log("avg", avg)
        return (
            <div>
                <h3>{title}</h3>
                <img className="poster" src={fullPosterPath} />
                <div>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={avg}
                    />
                </div>
            </div>

        );
    }
}
}