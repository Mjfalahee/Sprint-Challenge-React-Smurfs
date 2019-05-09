import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      currentsmurf: 0
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
  }

  checkSmurfs() {
    axios 
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({smurfs: res.data}))
      .catch(err => console.log(err))
      return this.state.smurfs;
  }

  deleteSmurf(smurf) {
    axios
      .delete(`http://localhost:3333/smurfs/${smurf}`)
      .then(res => {
        console.log(res.data);
        this.setState({smurfs: res.data});
      })
      .catch(err => console.log(err))
  }

  setActive = target => {
    console.log(target);
    this.setState({currentsmurf: target});
  }

  updateSmurf(smurf) {
    axios
      .put(`http://localhost:3333/smurfs/${this.state.currentsmurf}`, smurf)
      .then(res => {
        console.log(res.data);
        this.setState({smurfs: res.data}, {currentsmurf: {}});
      })
      .catch(err => console.log(err))
  }

  getActive = () => {
    axios
      .get(`http://localhost:3333/smurfs/${this.state.currentsmurf}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/"
        render={props => <Smurfs {...props} 
        smurfs={this.checkSmurfs()}
        deleteSmurf={this.deleteSmurf}
        setActive={this.setActive}
         />} />
        <Route path="/smurf-form"
        render={props => <SmurfForm {...props} />} />
        {/* <Route path="/update-form"
        render={props => <UpdateForm {...props} 
        smurf={this.getActive()}/> } /> */}
      </div>
    );
  }
}

{/* <SmurfForm newSmurf={this.newSmurf} />
        <Smurfs smurfs={this.state.smurfs} /> */}
export default App;
