import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NewCandidates from "./screens/newcandidates";
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
      candidateIdList: [],
    };
  }

  componentDidMount() {
    this.getcandidateList();
  }

  // getcandidateId() {

  // }

  async getcandidateList() {
    const url = "http://localhost:3001/candidates";
    const response = await fetch(url);
    const jsonData = await response.json();
    this.setState({
      candidateList: jsonData,
    });
  }

  render() {
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
                        getCandidates={this.getcandidateList}
                        viewCandidate={this.getcandidateId}
                        isAuthed={true}
                      />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WalleApp;
