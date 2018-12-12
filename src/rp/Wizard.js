import React, { Component } from 'react';

export default class Wizard extends Component {
  static Page = ({ children }) => children

  state = {
    currentPage: 0,
    maxPage: React.Children.toArray(this.props.children).length - 1
  }

  next = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  previous = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  render() {
    let { currentPage, maxPage } = this.state
    let { handleSubmit } = this.props
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        { React.Children.toArray(this.props.children)[currentPage] }
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          { currentPage > 0 && <button onClick={this.previous}>previous</button> }
          { currentPage < maxPage && <button onClick={this.next}>next</button> }
          { handleSubmit && currentPage === maxPage && <button onClick={handleSubmit}>submit</button>}
        </div>
      </div>
    )
  }
}