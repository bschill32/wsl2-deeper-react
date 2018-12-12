import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SuperSecret from './components/SuperSecret';
import OnOffButton from './components/OnOffButton';
import AccordianMenu from './components/AccordianMenu';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SuperSecret isAuthenticated={true}/>
        <OnOffButton />
        <AccordianMenu title='Aloha!'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum blanditiis, error dolores ad explicabo atque culpa consectetur incidunt. Eligendi impedit voluptatibus aperiam enim voluptate aut inventore obcaecati dolorum voluptas eos!</p>
        </AccordianMenu> */}
        {/* <LoginForm /> */}
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
