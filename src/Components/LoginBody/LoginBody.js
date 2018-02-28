import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { dispatchSaveAction, dispatchPageAction } from '../../redux/actions';


import './loginBody.css';

class LoginBody extends Component {
  state = {
    questions: [],
    name: '',
  }


  componentDidMount() {
    fetch('questions')
      .then(response =>
        response.json())
      .then((data) => {
        this.setState({
          questions: data,
        });
        console.log(data);
      });
  }

  setUserName = () => {
    this.props.questions(this.state.questions);
    axios.get(`/user/insert/${this.state.name}`).then((response) => {
      console.log(response.data);
    });
    this.props.dispatchUserName(this.state.name);
    this.props.dispatchPageId(2);
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <div className="login-body-container">
        <div className="login-body-card">
          <div className="welcome">Welcome to
            <span className="quizzy"> Quizzy</span>
          </div>
          <div className="login">
            <p>Login</p>
            <label>Username</label>
            <br />
            <input type="text" onChange={this.handleChange} />
            <br />
            <button className="login-login" onClick={this.setUserName}>login</button>
          </div>
        </div>
      </div >
    );
  }
}

const mapStatesToProps = state => ({
  pageId: state.pageId,
  name: state.name,
});

const mapDispatchToProps = dispatch => ({
  dispatchUserName: noteData => dispatch(dispatchSaveAction(noteData)),
  dispatchPageId: page => dispatch(dispatchPageAction(page)),
});


export default connect(mapStatesToProps, mapDispatchToProps)(LoginBody);

