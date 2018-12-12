import React from 'react'

import Form from '../rp/Form'

export default function LoginForm(props) {
  return (
    <Form render={ form => {
      return (
        <div>
          <h1>Login Form</h1>
          <input type="text" name="email" placeholder="email" onChange={ form.handleChange }/>
          <input type="password" name="password" placeholder="password" onChange={ form.handleChange }/>
          <button onClick={form.handleSubmit}>submit</button>
        </div>
      )
    }} />
  )
}