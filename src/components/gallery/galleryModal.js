import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import RatingWidget from 'react-rating-widget'
import RatingsManager from '../../modules/RatingsManager'
export default class GalleryModal extends React.Component {

    state = {
        id: "",
        movieId: "",
        userId: "",
        stars: "",
        memo: ""
    }

    starsClicked = ""
    selection = ""

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            unmountOnClose: true
        };
        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
    }


    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleTotal = () => {
        this.toggle()
        this.componentDidMount()
        this.forceUpdate()
    }

    AddRating = evt => {
        this.toggle()
        evt.preventDefault()
          const newRating = {
              title: this.props.movie.title,
            movieId: this.props.movie.id,
            userId: parseInt(sessionStorage.getItem("credentials")),
            stars: parseInt(this.starsClicked),
            memo: document.querySelector("#memo").value
          }
          RatingsManager.addRating(newRating)
          console.log(newRating)}


    storeAnswers = (answer) => {
        this.starsClicked = answer.answer
        console.log(`You have rated "${this.props.movie.title}" ` + answer.answer + " stars.");
    }

    changeUnmountOnClose(e) {
        let value = e.target.value;
        this.setState({ unmountOnClose: JSON.parse(value) });
    }

    componentDidMount() {

    }


    render() {
        
        this.componentDidMount()
        console.log(this.props.movie)
        let ppURL = "https://image.tmdb.org/t/p/original/"
        let URLpp = this.props.movie.posterPath
        let fullPosterPath = `${ppURL}${URLpp}`


        const ratingReactions = { 1: "Joseph Gordon Leave-it", 2: "Joseph Gordon Leftovers", 3: "Joseph Gordon Luke-warm", 4: "Joseph Gordon Like-it", 5: "Joseph Gordon Loved it!" };
        const reactionStyle = {
            textAlign: 'center', padding: '7px 0 4px', color: '#72727d', font: '700 14px/16px Roboto, sans-serif', borderRadius: '20px', backgroundColor: '#fdedee', width: '97px', margin: '20px auto 0', transition: '0.2s all ease-in-out',
        };

        
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    {' '}
                    <Button position="center" size="sm" color="secondary" onClick={this.toggleTotal}>make first review</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>{this.props.movie.title}</ModalHeader>
                    <ModalBody>
                        <div id="modalPoster"><img class="poster" src={fullPosterPath} /></div>
                        <div style={{ position: 'relative' }}>
                            <div>
                                <RatingWidget
                                    iconCount={5}
                                    reactionLables={ratingReactions}
                                    reactionStyle={reactionStyle}
                                    storeAnswers={this.storeAnswers.bind(this)} />
                            </div>
                        </div>
                        <Input type="textarea" id="memo" placeholder="Leave a review!" rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.AddRating}>Add Rating!</Button>{' '}
                        <Button color="secondary" onClick={this.toggleTotal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
