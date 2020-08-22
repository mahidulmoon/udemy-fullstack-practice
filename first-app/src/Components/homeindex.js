import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import App from '../App.js';
import Header from './Header';
import Footer from './footer';
export default class Homeindex extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <Route path='/' exact component={App}></Route>
          <Route path='/header' component={Header}></Route>
          <Route path='/footer' component={Footer}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
