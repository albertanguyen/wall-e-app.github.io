import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NewCandidates from "./screens/newcandidates";
import RandomizedString from './components/randomizeString';
import NavbarComponent from './components/navbar';
import Homepage from "./screens/homepage";
import Candidates from "./screens/candidates";
import "./App.css";
import View from "./screens/viewindividuals"

class WalleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false,
      candidateList: [],
      candidateIdList: [],
      candidate:{}
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
      this.setState (
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


  handleOnClickDelete = async (id) => {
    let url = `http://localhost:3001/candidates/${id}`
    const response = await fetch(url, {
      method: "DELETE"
    })
    this.getcandidateList()
  }

  viewCandidate = (id) => {
    console.log("WIND")
    
    let selectedCandidate = this.state.candidateList.find(candidate => candidate.id === id)
    this.setState({ candidate: selectedCandidate })
  }

  render() {
    // console.log("candidate list", this.state.candidateList);
    return (
      <Router>
        <div className="App-body">
          <NavbarComponent />
          <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            <Route
              path="/candidates"
              component={(props) => {
                return <Candidates
                  {...props}
                  candidateList={this.state.candidateList}
                  handleOnClickDelete={this.handleOnClickDelete}
                  viewCandidate={this.viewCandidate}

                />
              }}
            />
            <Route
              path="/candidate/:id"
              component={(props) => {
                return <View 
                {...props} 
                candidate={this.state.candidate}
                 />

              }}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WalleApp;


