import ReactSearchBox from 'react-search-box'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import NewModal from './NewModal';
 

export default class SearchMovies extends Component {
  data = []
  record= []

  onSelectF = (record) => {
    this.record.push(record)
    
    this.record =  this.record.filter(record => record.grab === 1) 
    console.log(this.record)
  }

  render() {
    this.props.movies.map(movie => {
      this.data.push({
        key: movie.title,
        value: movie.title,
        movieId: movie.id,
        ppath: movie.posterPath,
        grab: 1,
      })
        })
    console.log(this.data)
    return (
      <div>
      <div>
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
        onSelect={record => this.onSelectF(record)}
      />
      </div>
      <div>
         
      <NewModal {...this.props}
      record={this.record}
         />
      </div>
      </div>
    )
  }
}