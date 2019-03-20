import React, { Component } from "react"
import UserCard from "./UserCard"
import SearchMovies from "./SearchMovies"
import { Container, Row, Col, CardColumns } from 'reactstrap';



export default class UserView extends Component {

    componentDidMount() {
        console.log("test")
    }

    render() {
        const userId = parseInt(sessionStorage.getItem("credentials"))
        const history = this.props.history;
        return (
            <React.Fragment>
                 <style>{'body { background-color:  #a9a9a9; }'}</style>
                 <div class="container-fluid">
    <div class="row  justify-content-center align-items-center d-flex text-center h-100">
      <div class="col-12 col-md-8  h-50 ">
          <h2 class="display-2 hero  text-light mb-2 mt-5"><strong>Your Reviews</strong> </h2>
          <p class="lead  text-light">here you can create, edit or delete a review for any JGL movie.</p>
          <p class="lead  text-light">Yes, this is the beautiful future your grandparents worked so hard to provide you with.</p>
          </div>
          </div>
</div>
                <SearchMovies  {...this.props}/>
                <Row> <p>     </p>   </Row>
                <CardColumns>

                {
                    this.props.ratings.filter(ratings => ratings.userId === userId)
                    .map(rating =>
                        this.props.movies.filter(movies => movies.id === rating.movieId).map(movie =>
                        <UserCard {...this.props}
                        key={`Movie-${rating.id}`}
                            ratings={this.props.ratings}
                            movies={this.props.movies}
                            rating={rating}
                            movie={movie}
                            getPosterURL={this.props.getPosterURL}
                            />
                    ))
                }

                </CardColumns>   
            </React.Fragment>
        )
    }
}
