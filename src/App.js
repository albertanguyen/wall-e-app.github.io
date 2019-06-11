import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch, 
  Link      
}  from 'react-router-dom';
import NewCandidates from './screens/newcandidates';
import Candidates from './screens/candidates';
import Homepage from './screens/homepage';
import './App.css';



class WalleApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloaded: false,
      candidateList:[]
    }
  }


  componentDidMount() {
    this.getcandidateList()
  }

  async getcandidateList() {
    const url = "http://localhost:3001/candidates";
    const response = await fetch(url);
    const jsonData = await response.json();
    this.setState(
      {
        candidateList: jsonData, 
      }
    )
  }

  render() {
    return (
      <Router>
        <Homepage />
          <div className="App-body">

            {/* <Route 
              path = "/cadidates"
              component={this.state.candidateList}
            /> */}
          </div>
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
    );
  }
}

export default WalleApp;
