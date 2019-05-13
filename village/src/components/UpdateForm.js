import React, { Component } from 'react';

class UpdateForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }
    
    handleInputChange = e => {
      this.setState({[e.target.name]: e.target.value});
    };
  
    render() {
      return (
        <div className="UpdateForm">

        <div className="currentsmurf">
            <h3>{this.props.name}</h3>
            <strong>{this.props.height} tall</strong>
            <p>{this.props.age} smurf years old</p>
        </div>
          <form onSubmit={''}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Update Entry</button>
          </form>
        </div>
      );
    }
  }
  
  export default UpdateForm;
  