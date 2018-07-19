import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import './Jobs.css';
import JobsListItem from './JobsListItem.js';


class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  componentWillMount() {
    axios.get('/api/jobs').then(({data})=> {
      this.setState({
        jobs: data
      });
    });
  }

  render() {
    let jobsJSX = this.state.jobs.map((job, index) => {
      return <JobsListItem 
        key={index} 
        {...job} />
    }); 

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Jobs in Atlanta</h1>
            <p className="App-subtitle">Click to explore Jobs</p>
          </header>
        </div>
        <div className="Jobs">{ jobsJSX }</div>
      </div>
    );
  }
}

export default Jobs;