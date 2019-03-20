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
 <style>{'body {background: url("https://wallpaperhd.site/wp-content/uploads/2018/09/Wallpaper-joseph-gordon-levitt-dark-haired-long-haired-tie-shirt3987217807.jpg"), #ffffff ; background-repeat:no-repeat; background-position: 0px 130px ; background-size: 20%}'}</style>
 <div class="container-fluid">
    <div class="row  justify-content-center align-items-center d-flex text-center h-100">
      <div class="col-12 col-md-8  h-50 ">
          <h1 class="display-2 hero  text-dark mb-2 mt-5"><strong>Joseph Gordon Love-it or Leave-it</strong> </h1>
</div></div></div>
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
