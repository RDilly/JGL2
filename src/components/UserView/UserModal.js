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
      const editedRating = {
        id: this.props.rating.id,
        movieId: this.props.rating.movieId,
        userId: parseInt(sessionStorage.getItem("credentials")),
        stars: parseInt(this.starsClicked),
        memo: document.querySelector("#memo").value
      }
      RatingsManager.updateRating(editedRating)
      console.log(editedRating)}

  storeAnswers(answer) {
        this.starsClicked = answer.answer
         console.log(`You have rated "${this.props.movie.title}" ` + answer.answer +" stars.");
     }
 

  render() {
    
    return (
      <div>
        <Form inline onSubmit={(e) => e.preventDefault()}>
          {' '}
          <Button color="danger" onClick={this.toggle}>Change Rating</Button>
        </Form>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>



            <div className="form-group">
              <label className="memoPrompt" htmlFor="title">Why did you give this {this.props.stars} stars?</label>
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
              <button
                type="submit"
                onClick={this.updateExistingRating}
                className="btn btn-primary"
              >
                Change
            </button>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateExistingRating}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}