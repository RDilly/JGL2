import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form} from 'reactstrap';
import RatingsManager from '../../modules/RatingsManager'
import RatingWidget from 'react-rating-widget'

export default class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    
  }

  changeUnmountOnClose(e) {
    let value = e.target.value;
    this.setState({ unmountOnClose: JSON.parse(value) });
  }

  updateExistingRating = evt => {
    this.toggle()
    evt.preventDefault()
    console.log("memo memo memo", document.querySelector("#memo").value)
    if (document.querySelector("#memo").value === "" && (isNaN(this.starsClicked)) == true)
    {
      const editedRating = {
        id: this.props.rating.id,
        movieId: this.props.rating.movieId,
        userId: parseInt(sessionStorage.getItem("credentials")),
        stars: parseInt(this.props.rating.stars),
        memo: this.props.rating.memo
      }
      RatingsManager.updateRating(editedRating)
      console.log(editedRating)}
      else if (document.querySelector("#memo").value === "" && (isNaN(this.starsClicked)) == false)
    {
      const editedRating = {
        id: this.props.rating.id,
        movieId: this.props.rating.movieId,
        userId: parseInt(sessionStorage.getItem("credentials")),
        stars: parseInt(this.starsClicked),
        memo: this.props.rating.memo
      }
      RatingsManager.updateRating(editedRating)
      console.log(editedRating)}
         else if (document.querySelector("#memo").value != "" && (isNaN(this.starsClicked)) == true) {
          const editedRating = {
            id: this.props.rating.id,
            movieId: this.props.rating.movieId,
            userId: parseInt(sessionStorage.getItem("credentials")),
            stars: parseInt(this.props.rating.stars),
            memo: document.querySelector("#memo").value
          }
          RatingsManager.updateRating(editedRating)
          console.log(editedRating)}
          else {
            const editedRating = {
              id: this.props.rating.id,
              movieId: this.props.rating.movieId,
              userId: parseInt(sessionStorage.getItem("credentials")),
              stars: parseInt(this.starsClicked),
              memo: document.querySelector("#memo").value
            }
            RatingsManager.updateRating(editedRating)
            .then(console.log(editedRating))}

            this.forceUpdate()
      }

  storeAnswers(answer) {
        this.starsClicked = answer.answer
         console.log(`You have rated "${this.props.movie.title}" ` + answer.answer +" stars.");
     }
 

  render() {
    
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          {' '}
          <Button color="secondary" size="sm" onClick={this.toggle}>Edit Review</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
          <ModalHeader toggle={this.toggle}>{this.props.movie.title}</ModalHeader>
          <ModalBody>



            <div className="form-group">
              <label className="memoPrompt" htmlFor="title">Whyat did you think of {this.props.movie.title}?</label>
              <div style={{ position: 'relative' }}>
                <div>
                  <RatingWidget
                    iconCount={5}
                    reactionLables={this.props.ratingReactions}
                    reactionStyle={this.props.reactionStyle}
                    storeAnswers={this.storeAnswers.bind(this)} />
                </div>
              </div>

              <Input type="textarea" placeholder={this.props.rating.memo}rows={5} id="memo"/>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateExistingRating}>Finalize Edit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}