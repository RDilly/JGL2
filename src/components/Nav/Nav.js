import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row } from "reactstrap"
import Headroom from 'react-headroom'
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <div style={{ margintop: 0 }}>
      
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
          <Row>
            <Link className="nav-link text-dark" to="/">
              Home
            </Link>
            <Link className="nav-link text-dark" to="/UserView">My Reviews</Link>
            </Row>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-outline-info mr-4"
          onClick={this.logout}>
          Logout
        </button>      
      </nav>
      </div>



    )
  }
}

export default Nav
