import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      <div>
    <div class="container-fluid">
    <div class="row  justify-content-center align-items-center d-flex text-center h-100">
      <div class="col-12 col-md-8  h-50 ">
          <h1 class="display-2 hero  text-light mb-2 mt-5"><strong>Joseph Gordon Love-it or Leave-it</strong> </h1>
          <p class="lead  text-light">The first, only, and possibly best</p> <p class="lead text-light"> JGL-centric movie rating app</p>
          </div>
          </div>
</div>
       <style>{'body { background-image: url("https://weppixel.com/sites/default/files/wallpaper/celebrities/57954/joseph-gordon-levitt-wallpapers-57954-6755728.jpg"); background-size: 80% }'}</style>
      <div class="container-fluid">
      <div class="col justify-content-center align-items-center d-flex text-center h-100">
      <form className="loginForm">
        <input
        class="form-control"
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`username`}
          required=""
          autoFocus=""
        />
        <input
        class="form-control"
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`password`}
          required=""
        />
        <button class="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light" type="submit" onClick={this.handleLogin}>
          Sign in
        </button>
        <button class="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light" type="submit" onClick={this.handleRegister}>
          Register
        </button>
      </form>
      </div>
      </div>
      </div>
    )
  }
}
