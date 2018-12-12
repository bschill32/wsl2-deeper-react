import React from 'react'

import Form from '../rp/Form'
import Wizard from '../rp/Wizard';

export default function RegistrationForm(props) {
  return (
    <Form render={ form => {
      let { state } = form
      return (
        <Wizard handleSubmit={form.handleSubmit}>
          <Wizard.Page>
            <input 
              type="text" 
              name="name" 
              placeholder="name" 
              value={state.name}
              onChange={ form.handleChange }/>
            <input 
              type="text" 
              name="email" 
              placeholder="email" 
              value={state && state.email}
              onChange={ form.handleChange }/>
            <input 
              type="password" 
              name="password" 
              placeholder="password" 
              value={state && state.password}
              onChange={ form.handleChange }/>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="confirm password" 
              value={state && state.confirmPassword}
              onChange={ form.handleChange }/>
          </Wizard.Page>
          <Wizard.Page>
            <input 
              type="text"
              name="address"
              placeholder="address"
              value={state && state.address}
              onChange={ form.handleChange }/>
            <input 
              type="text"
              name="city"
              placeholder="city"
              value={state && state.city}
              onChange={ form.handleChange }/>
            <input 
              type="text"
              name="state"
              placeholder="state"
              value={state && state.state}
              onChange={ form.handleChange }/>
            <input 
              type="text"
              name="zip"
              placeholder="zip"
              value={state && state.zip}
              onChange={ form.handleChange }/>
          </Wizard.Page>
          <Wizard.Page>
            <input 
              type="text"
              name="favoriteColor"
              placeholder="favorite color"
              onChange={ form.handleChange }/>
            <input 
              type="text"
              name="favoriteHawaiianIsland"
              placeholder="favorite Hawaiian island"
              onChange={ form.handleChange }/>
          </Wizard.Page>
        </Wizard>
      )
    }} />
  )
}