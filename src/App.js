import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import View from './screens/viewindividuals';
// import NewCandidates from "./screens/newcandidates";
import MyVerticallyCenteredModal from "./components/verticalmodal";
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
      candidate: {}
    };
  }

  // componentDidUpdate() {
  //   this.getcandidateList();    
  // }

  componentDidMount() {
    this.getcandidateList();
  }

  // changeURLCandidate() {
    
  // }

  // getcandidateId() {
  //   const candidateIdList = this.state.candidateIdList.map(
  //     element => {
  //       return element.id
  //     }
  //   ) 
  //   this.setState(
  //     {
  //       candidateIdList: candidateIdList
  //     }
  //   ) 
  // }

  getindividual = (id) => {
    // const result = inventory.find(fruit => fruit.name === 'cherries');
    const selectedCandidate = this.state.candidateList.find( element => element.id = id)
    console.log(selectedCandidate)
    this.setState(
      {
        candidate: selectedCandidate
      }
    )
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
              render={(props) => (
                <Candidates
                  {...props}
                  candidates={this.state.candidateList}
                  viewCandidate={this.getindividual}
                  isAuthed={true}
                />
              )}
            />
            <Route
              path="/candidates/:id"
              render = {(props) => (
                <View 
                  {...props}
                  candidate={this.state.candidate}
                />
              )}
            />
            <Route
              exact
              path="/candidates"
              render={(props) => (
                <MyVerticallyCenteredModal
                  {...props}
                  show={this.state.modalShow}
                  onHide={this.modalClose}
                  candidate={this.state.candidate}
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
