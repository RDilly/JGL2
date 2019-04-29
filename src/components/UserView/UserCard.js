import RatingsManager from "../../modules/RatingsManager"
import React, { Component } from "react"
import "./user.css"
import UserModal from "./UserModal";
import Fade from 'react-reveal/Fade';
import StarRatingComponent from 'react-star-rating-component';
import { Button, Row, Col, Card, CardImg, CardBody,
    CardTitle,  } from 'reactstrap'


export default class UserCard extends Component {

        state = {
            id: "",
            movieId: "",
            userId: "",
            stars: "",
            memo: ""
        }

        starsClicked = ""


    updateExistingRating = evt => {
        evt.preventDefault()
          const editedRating = {
            id: this.props.match.params.ratingId,
            movieId: this.props.rating.movieId,
            userId: parseInt(sessionStorage.getItem("credentials")),
            stars: parseInt(this.starsClicked),
            memo: this.state.memo
          }
          
          console.log(editedRating);}

    componentDidMount() {
        console.log(this.props.ratings)
        console.log(this.props.rating)
        console.log(this.props.movie)

        this.setState({
            id: this.props.match.params.ratingId,
            movieId: this.props.rating.movieId,
            userId: parseInt(sessionStorage.getItem("credentials")),
            stars: this.props.rating.stars,
            memo: this.props.rating.memo
          });
    }

    storeAnswers(answer) {
       this.starsClicked = answer.answer
        console.log(`You have rated "${this.props.movie.title}" ` + answer.answer +" stars.");
    }



    render() {
        let title = this.props.movie.title
        let movieId = this.props.movie.id
        let TMId = this.props.movie.TMId
        let ppURL = "https://image.tmdb.org/t/p/original/"

        let URLpp = this.props.movie.posterPath
        let fullPosterPath = `${ppURL}${URLpp}`
        let stars = this.props.rating.stars

        

        const ratingReactions = { 1: "Joseph Gordon Leave-it", 2: "Joseph Gordon Leftovers", 3: "Joseph Gordon Luke-warm", 4: "Joseph Gordon Like-it", 5: "Joseph Gordon Loved it!" };

        const reactionStyle = {
            textAlign: 'center', padding: '7px 0 4px', color: '#72727d', font: '700 14px/16px Roboto, sans-serif', borderRadius: '20px', backgroundColor: '#fdedee', width: '97px', margin: '20px auto 0', transition: '0.2s all ease-in-out',
        };

        console.log(this.props.rating)
        console.log(TMId)
        console.log(movieId)
        return (
            
            <Fade>
            <Card body style={{ textAlign: 'center', color: '#6f6e6e', backgroundColor: '#e6e6e6', borderColor: '#e6e6e6' }}>
                <Col xs="auto">
                <CardImg class="img-responsive" src={fullPosterPath} alt='movieposter' />
                </Col>
            
                <CardTitle position="center">{title}</CardTitle>
                
                <div>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={this.props.rating.stars}
                    />
                </div>
               
                
                <CardBody>
                   <p>{this.state.memo}</p>
                </CardBody>
                <Row id="buttonRow">
                <Col>
                 <UserModal {...this.props}
                        key={`Movie-${this.props.rating.id}`}
                            ratings={this.props.ratings}
                            movies={this.props.movies}
                            rating={this.props.rating}
                            movie={this.props.movie}
                            getPosterURL={this.props.getPosterURL}
                            stars={stars}
                            ratingReactions={ratingReactions}
                            reactionStyle={reactionStyle}
                            memo={this.props.memo}
                            />
                </Col>
                <Col>
                <Button color="light" size="sm" onClick={() => RatingsManager.deleteReview(this.props.rating.id)}>Delete Review</Button>{' '}
                </Col>
            </Row>
            </Card>
            </Fade>

        );
        }
}
