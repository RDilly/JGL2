import React, { Component } from "react"
import GalleryCard from "./galleryCard"
import StarRatingComponent from "react-star-rating-component"

export default class Gallery extends Component {

    componentDidMount() {
        console.log("componentDidMount -- MovieList")
    }


    render() {
        const history = this.props.history;
        console.log(this.props)
        return (
            <React.Fragment>

                <div>
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            history.push("/UserView")
                        }
                        }>
                        Your Ratings
                </button>
                </div>


                <article className="card movies card">
                {
                    this.props.movies.map(movie =>
                        <GalleryCard {...this.props}
                        key={`Movie-${movie.id}`}
                            ratings={this.props.ratings}
                            movies={this.props.movies}
                            movie={movie}
                            getPosterURL={this.props.getPosterURL}
                            />
                    )
                }
                </article>
            </React.Fragment>

        )
    }
}
