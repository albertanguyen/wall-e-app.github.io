import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import View from './screens/viewindividuals';
// import NewCandidates from "./screens/newcandidates";
import RandomizedString from './components/randomizeString';
import NavbarComponent from './components/navbar';
import Homepage from "./screens/homepage";
import Candidates from "./screens/candidates";
import "./App.css";

class WalleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      candidateList: [],
      contactList:[],
      candidateIdList: [],
    };
  }

  componentDidMount() {
    this.getcandidateList();
  }

  createFakeID() {
    const newcandidateList = this.state.candidateList.map(
      element => {
        return { ...element, fakeId: RandomizedString() }
      }
    )
    this.setState(
      {
        candidateList: newcandidateList
      }
    )
  }

  async getcandidateList() {
    const url = "http://localhost:3001/candidates";
    const response = await fetch(url);
    const jsonData = await response.json();
    this.setState({
      candidateList: jsonData,
    }, this.createFakeID);
  }

  render() {
    // console.log("candidate list in App.js", this.state);
    return (
      <Router>
        <div className="App-body">
          <NavbarComponent />
          <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            <Route
              exact
              path="/candidates"
              render={() => (
                <Candidates
                  candidates={this.state.candidateList}
                  viewCandidate={this.getcandidateId}
                  isAuthed={true}
                />
              )}
            />
            <Route
            path="/candidates/id"

            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WalleApp;
