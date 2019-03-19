import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row } from "reactstrap"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
          <Row>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/UserView">My Reviews</Link>
            </Row>
          </li>
        </ul>
        <a className="nav-link">Hello {this.props.activeUser.username}!</a>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.logout}>
          Logout
        </button>
      </nav>
    )
  }
}

export default Nav
