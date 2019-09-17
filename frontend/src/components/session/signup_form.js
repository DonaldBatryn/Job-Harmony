import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      f_name: '',
      l_name: '',
      password: '',
      password2: '',
      zip_code: '',
      role: 'Please select a role',
      errors: {}
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      f_name: this.state.f_name,
      l_name: this.state.l_name,
      password: this.state.password,
      password2: this.state.password2,
      zip_code: this.state.zip_code,
      role: this.state.role
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    let err = Object.values(this.state.errors);
    return (
      <ul>
        {err}
      </ul>
    );
  }

// {
//   Object.keys(this.state.errors).map((error, i) => (
//     <li key={`error-${i}`}>
//       {this.state.errors[error]}
//     </li>
//   ))
// }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <br />
            <input type="text"
              value={this.state.f_name}
              onChange={this.update('f_name')}
              placeholder="First Name"
            />
            <br />
            <input type="text"
              value={this.state.l_name}
              onChange={this.update('l_name')}
              placeholder="Last Name"
            />
            <br />
            <input type="text"
              value={this.state.zip_code}
              onChange={this.update('zip_code')}
              placeholder="Zip Code"
            />
            <br />
            <label>Please select a Role:</label>
            <select value={this.state.role} onChange={this.update('role')}>
              <option value="Please select a role" disabled>Please select a role</option>
              <option value="Job-Seeker">Job-Seeker</option>
              <option value="Employer">Employer</option>
            </select>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);