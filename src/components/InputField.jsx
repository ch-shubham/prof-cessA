import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class InputField extends Component {
  render() {
    return (
      <input
        type={this.props.type}
        className="form-control"
        placeholder={this.props.placeholder}
        required
        onChange={this.props.handleChange}
      />
    )
  }
}
InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.any,
}
