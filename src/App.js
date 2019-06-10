import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
  Link      
}  from 'react-router-dom';
import NavbarComponent from './components/navbar';
import NewCandidates from './screens/newcandidates';
import Candidates from './screens/candidates';
import View from './screens/view';
import './App.css';


class WalleApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloaded: false,
      candidateList: [],
    }
  }
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <header className="App-header">
          <img src={'img/Wall-e27.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's find your best companions!</h1>
        </header>
        <Router>
          {/* <Route
            path='/candidates'
            render = { (this.state.candidateList) => (
              <Dashboard {...this.state.candidateList} 
              isAuthed = {true}
              />
            )
            }
          /> */}
        </Router> 

      </div>
    );
  }
}

export default WalleApp;
