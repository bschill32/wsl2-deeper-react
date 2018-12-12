import { Component } from 'react';

export default class Form extends Component {
  state = {}
  handleChange = e => {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    console.log('form data:', this.state)
  }

  render() {
    let form = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      state: this.state
    }
    return this.props.render(form)
  }
}