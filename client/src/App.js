import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var paragraph = { paragraph: event.target.value }; 
    axios.post('/api/v1/tag-checker', paragraph)
         .then((res) => {
           const response = res.data;
           this.setState({response});
         })
         .catch((err) => {
            const response = err.response.data;
            this.setState({response});
        });
  }

  render() {
    return (
      <div className="App">
        <h1>This is the Tag Checker</h1>
        <input
          type="text"
          onChange={this.handleChange}
        />
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;