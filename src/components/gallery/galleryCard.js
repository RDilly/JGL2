import RatingsManager from "../../modules/RatingsManager"
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import { get } from "http";
import "./gallery.css"
import GalleryModal from './galleryModal'
import Fade from 'react-reveal/Fade';
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle  } from 'reactstrap'
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
                <Fade>
                <Card body style={{ textAlign: 'center', color: '#6f6e6e', backgroundColor: '#e6e6e6', borderColor: '#e6e6e6' }}>
                <Col><CardTitle position="center">{title}</CardTitle></Col>
                <Row buffer="20px"><Col></Col><GalleryModal  {...this.props}
                        movie={this.props.movie}/><Col></Col></Row>
                <Col xs="auto">
                <CardImg class="img-responsive" src={fullPosterPath} alt='movieposter' />
                </Col>
            </Card>
                </Fade>
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

                <Fade>
                <Card body style={{ textAlign: 'center', color: '#6f6e6e', backgroundColor: '#e6e6e6', borderColor: '#e6e6e6' }}>
                
                <Col><CardTitle position="center">{title}</CardTitle></Col>
                <Col>
                <div>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={avg}
                    />
                </div>
                </Col>
                
                <Col xs="auto">
                <CardImg class="img-responsive" src={fullPosterPath} alt='movieposter' />
                </Col>
            </Card>
            </Fade>
        );
    }
}
}