import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form } from 'reactstrap';
import RatingsManager from '../../modules/RatingsManager'
import RatingWidget from 'react-rating-widget'

class ModalExample extends React.Component {
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

    storeAnswers(answer) {
        this.starsClicked = answer.answer
        console.log(`You have rated "${this.props.selItem.value}" ` + answer.answer + " stars.");
    }

    render() {

        console.log(this.props.selItem)
        const ratingReactions = { 1: "Joseph Gordon Leave-it", 2: "Joseph Gordon Leftovers", 3: "Joseph Gordon Luke-warm", 4: "Joseph Gordon Like-it", 5: "Joseph Gordon Loved it!" };

        const reactionStyle = {
            textAlign: 'center', padding: '7px 0 4px', color: '#72727d', font: '700 14px/16px Roboto, sans-serif', borderRadius: '20px', backgroundColor: '#fdedee', width: '97px', margin: '20px auto 0', transition: '0.2s all ease-in-out',
        };
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    {' '}
                    <Button color="danger" onClick={this.toggle}>add new review</Button>
                </Form>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} unmountOnClose={this.state.unmountOnClose}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label className="memoPrompt" htmlFor="title">prompt</label>
                            <div style={{ position: 'relative' }}>
                                <div>
                                    <RatingWidget
                                        iconCount={5}
                                        reactionLables={ratingReactions}
                                        reactionStyle={reactionStyle}
                                        storeAnswers={this.storeAnswers.bind(this)} />
                                </div> </div> </div>
                        <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;