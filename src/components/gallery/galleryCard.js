import RatingsManager from "../../modules/RatingsManager"
import React, { Component } from "react"
import StarRating from 'react-star-rating';
import { get } from "http";


export default class GalleryCard extends Component {

    componentDidMount() {
        console.log(this.props.movies)
        console.log(this.props.movie)
    }

    render() {
        let TMId = this.props.movie.TMId
        let poster = this.props.getPosterURL(TMId)

        console.log(poster)
        return (
            <div>
                
                </div>

        );
    }
}
