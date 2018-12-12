import React, { Component } from 'react';

export default function(WrappedComponent) {
  return class WithToggle extends Component {
    state = {
      toggle: false
    }

    handleChange = e => {
      this.setState({
        toggle: !this.state.toggle
      })
    }

    render() {
      let toggle = {
        value: this.state.toggle,
        handleChange: this.handleChange
      }

      return <WrappedComponent toggle={toggle} { ...this.props } />
    }
  }
}