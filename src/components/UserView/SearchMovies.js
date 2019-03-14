import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import NewModal from './NewModal';
 
export default class SearchMovies extends Component {
 
  state = {
    selItem: ""
  }
 

  HiItems = (items) => {
    console.log(items)
    return items
  }

  
 
  render () {
    let items = this.props.movies.map(movie => {
      let ppURL = "https://image.tmdb.org/t/p/original/"
      let URLpp = movie.posterPath
      let fullPosterPath = `${ppURL}${URLpp}`
      console.log(fullPosterPath)
      return  {
                    id: movie.id, value: movie.title, posterPath: fullPosterPath,
                } }
    )
    
    return (
      
      <div> 
        <Search items={items}
                placeholder= 'Create New Review'
                maxSelected={1}
                multiple={false}
                onItemsChanged={this.HiItems.bind(this)} />
    <NewModal {...this.props}
      />
    </div>
    )
  }
}
