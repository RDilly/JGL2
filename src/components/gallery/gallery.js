import React, { Component } from "react"
import GalleryCard from "./galleryCard"
import StarRatingComponent from "react-star-rating-component"
import { Button, CardColumns  } from 'reactstrap'
import "./gallery.css"


export default class Gallery extends Component {

    componentDidMount() {
        console.log("componentDidMount -- MovieList")
    }


    render() {
        const history = this.props.history;
        console.log(this.props)
        return (
            <React.Fragment>
 <style>{'body { background-color:  #f9f9f9; }'}</style>

                <CardColumns>
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
                </CardColumns>
            </React.Fragment>

        )
    }
}
