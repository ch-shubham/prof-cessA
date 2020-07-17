import React, { Component } from 'react'
import InputField from './InputField'

export default class ApplicationForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <form>
            <h3>Application Form</h3>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <InputField type="text" placeholder="First Name" />
                </div>
                <div className="col">
                  <InputField type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <InputField
                    type="text"
                    placeholder="Mobile with country code"
                  />
                </div>
                <div className="col">
                  <InputField type="email" placeholder="email" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <InputField type="text" placeholder="LinkedIn Url" />
                </div>
                <div className="col">
                  <InputField type="text" placeholder="SkypeId" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <InputField type="text" placeholder="City" />
                </div>
                <div className="col">
                  <InputField type="text" placeholder="Country" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Submit Form
              </button>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                View Users
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
