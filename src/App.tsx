import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import preval from 'preval.macro';

const USER = preval`
const fetch = require('isomorphic-unfetch');
module.exports = (await async function() {
  return await fetch('https://api.github.com/users/lucalanca')
    .then(res => res.json())
    .then(res => {
      console.log('res', res);
      return res;
    });
 })();
 `;

class App extends Component {
  render() {
    return (
      <pre>
        MACRO RESULT: {JSON.stringify(USER, null, 2)}
      </pre>
    );
  }
}

export default App;
