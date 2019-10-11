import React, { Component } from "react";
import "./App.css";
import Smurfs from './smurfs.js'
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index';
import Form from './Form';

class App extends Component {
  state = {
    Name: '',
    Age: '',
    Height: ''
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form addSmurf = {this.props.handleSubmit}/>
        <Smurfs smurfs ={this.state.smurfs}/>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      smurfs: state.smurfs
  }
}
export default connect (
  mapStateToProps,
  {fetchSmurfs}
)(App)
