import ReactSearchBox from 'react-search-box'
import React, { Component } from 'react'
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
     return this.data.push({
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
       
      <Row marginHeight="20px">
      <Col sm="12" md={{ size: 4, offset: 3 }}>
      <ReactSearchBox
        placeholder="Select a Movie!"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
        onSelect={record => this.onSelectF(record)}
      /></Col>
         
      <NewModal {...this.props}
      record={this.state.record}
         />
      </Row>
      </Container>
    )
  }
}