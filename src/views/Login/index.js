import React, { Component } from 'react'

export default class Login extends Component {

  login = () => {
    localStorage.setItem('token', 'abcd')
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        login
        <button onClick={this.login}>点击就登入</button>
      </div>
    )
  }
}
