import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      mobile: '',
      isSubmitted: false
    }
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnInputChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      isSubmitted: false
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({
      isSubmitted: true
    })
  }

  render() {
    return (
      <div className="container">
        <div className="App row">
          <div className="col-sm-7 login-form">
            <div className="wrapper">
              <div className="title">

                <h1>Welcome! Please fill below details to Login </h1>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      onChange={this.handleOnInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                      onChange={this.handleOnInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleOnInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile Number"
                      onChange={this.handleOnInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="from-group">
                    <button
                      className="btn btn-default"
                      onClick={this.handleOnSubmit}
                    > Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <h1>You have entered below details </h1>
            {this.state.isSubmitted ?
              <div>
                <h3>Name: {this.state.name}</h3>
                <h3>Email: {this.state.email}</h3>
                <h3>Password: {this.state.password}</h3>
                <h3>Mobile Number: {this.state.mobile}</h3>
              </div>
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
