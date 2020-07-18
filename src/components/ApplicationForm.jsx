import React, { Component } from 'react'
// import InputField from './InputField'
import axios from 'axios'

export default class ApplicationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    linkedin: '',
    skypeId: '',
    city: '',
    country: '',
  }

  handleChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value })
  }

  handleChangeLastName = (event) => {
    this.setState({ lastName: event.target.value })
  }
  handleChangeContact = (event) => {
    this.setState({ contact: event.target.value })
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangeLinkedin = (event) => {
    this.setState({ linkedin: event.target.value })
  }
  handleChangeSkypeId = (event) => {
    this.setState({ skypeId: event.target.value })
  }
  handleChangeCity = (event) => {
    this.setState({ city: event.target.value })
  }
  handleChangeCountry = (event) => {
    this.setState({ country: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      contact: this.state.contact,
      email: this.state.email,
      linkedin: this.state.linkedin,
      skypeId: this.state.skypeId,
      city: this.state.city,
      country: this.state.country,
    }
    console.log(user)

    axios.post(`http://localhost:4000/users/signup`, user).then((res) => {
      alert(`User: ${user.email} successfully registered`)
    })
  }

  handleGetDetails = () => {
    axios.get(`http://localhost:4000/users`).then((res) => {
      console.log(res.data[0])
    })
  }

  handleGetJokes = () => {
    axios.get(`http://api.icndb.com/jokes/random/5`).then((res) => {
      console.log(res)
      console.log(res.data.value)
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <h3>Application Form</h3>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="firstName"
                    name="firstName"
                    onChange={this.handleChangeFirstName}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="lastName"
                    name="lastName"
                    onChange={this.handleChangeLastName}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact"
                    name="contact"
                    onChange={this.handleChangeContact}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    onChange={this.handleChangeEmail}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="linkedIn"
                    name="firstNamelinkedin"
                    onChange={this.handleChangeLinkedin}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="skypeId"
                    name="skypeId"
                    onChange={this.handleChangeSkypeId}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="city"
                    name="city"
                    onChange={this.handleChangeCity}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="countyr"
                    name="countyr"
                    onChange={this.handleChangeCountry}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Submit Form
              </button>
            </div>
          </form>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.handleGetDetails}>
              View Users
            </button>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.handleGetJokes}>
              View Some Jokes
            </button>
          </div>
        </div>
      </div>
    )
  }
}
