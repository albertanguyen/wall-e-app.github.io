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
  

  handleOnClickDelete = async (id) => {
    let url = `http://localhost:3001/candidates/${id}`
    const response = await fetch(url, {
      method: "DELETE"
    })
    this.getcandidateList()
  }



  render() {
    console.log("candidate list", this.state.candidateList);
    return (
      <Router>
        <div className="App-body">
          <NavbarComponent />
          <Switch>
            <Route exact path="/" render={() => <Homepage />} />
{/* KHOA ADDED */}
            <Route
              path="/candidates"
              component={(props)=> {
                return <Candidates 
                {...props}
                candidateList={this.state.candidateList}        
                handleOnClickDelete={this.handleOnClickDelete}               
                />
              }}
            />
{/* END OF */}

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WalleApp;

////Your original code
            // <Route
            //   exact
            //   path="/candidates"
            //   render={() => {
            //     this.state.candidateIdList.map(candidate => (
            //       <div
            //         className="col-lg-4 col-md-6 col-12"
            //         style={{ height: 1000 }}
            //         key={candidate.id}
            //       >
            //         {
            //           <Candidates
            //             {...candidate}
            //             getCandidates={this.getcandidateList}
            //             viewCandidate={this.getcandidateId}
            //             isAuthed={true}
            //           />
            //         }
            //       </div>
            //     ));
            //   }}
            // />




