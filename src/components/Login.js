import React, {Component} from 'react';
import {login} from "../repository";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submitLogin(event) {
    event.preventDefault();
    login(this.state)
      .then(token => window.location = '/')
      .catch(err => alert(err));
  }

  _renderForm() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>Log in</h3>
        </div>

        <div className="card-body">
          <form onSubmit={this.submitLogin}>

            <div className="form-group">
              <label>Name: </label>
              <input type="text" className="form-control" name="name" onChange={this.handleInputChange}/>
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input type="password" className="form-control" name="password" onChange={this.handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <hr/>
        <div className="col-sm-8 offset-sm-2">
          {this._renderForm()}
        </div>
      </div>
    );
  }

}

export default Login;
