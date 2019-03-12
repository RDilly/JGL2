import RatingsManager from "../../modules/RatingsManager"
import React, { Component } from "react"
import StarRating from 'react-star-rating';


export default class GalleryCard extends Component {

    componentDidMount() {
        console.log(this.props.movies)
    }

    render() {
        let poster = this.props.movies.TMId
        console.log(poster)
        return (
            <div>
            <div key={this.props.movies.id} className="card">
                <div className="card-body">
                <h3>{this.props.movies.title}</h3>
                    <StarRating
                        name="Looper"
                        editing={false}
                        totalStars={5}
                        rating={3} />
                </div>
                </div>
                </div>

        );
    }
}
