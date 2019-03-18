import ReactSearchBox from 'react-search-box'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import { Container, Row, Col } from 'reactstrap';
import NewModal from './NewModal';
 

export default class SearchMovies extends Component {
  state = {
    record: []
  }

data = []
  

  onSelectF = (record) => {
    this.setState({ record: [record] })
    
    // this.state.record =  this.state.record.filter(record => record.grab === 1) 
    console.log(this.state.record);

    while(this.data.length > 0) {
      this.data.pop();
  }}
    

  makeData() {
    this.props.movies.map(movie => {
     this.data.push({
        key: movie.title,
        value: movie.title,
        movieId: movie.id,
        ppath: movie.posterPath,
        grab: 1,
      })
        })
}

  render() {
    this.makeData()
    console.log(this.data)
    return (
      <Container>
      <Row>
      <ReactSearchBox
        placeholder="Select a Movie!"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
        onSelect={record => this.onSelectF(record)}
      />
         
      <NewModal {...this.props}
      record={this.state.record}
         />
      </Row>
      </Container>
    )
  }
}