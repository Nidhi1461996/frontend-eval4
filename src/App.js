import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import Header from './Components/Header/Header';
import LoginBody from './Components/LoginBody/LoginBody';
import QuizBody from './Components/QuizBody/QuizBody';
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';
import './App.css';

class App extends Component {
  state = {
    questions: [],
  }
  setQuestion = (questions) => {
    this.setState({
      questions,
    });
  }
  render() {
    if ((this.props.pageId % 3) === 1) {
      return (
        <div className="App">
          <Header appName="Quizzy" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <LoginBody questions={this.setQuestion} />
          {/* <QuizBody /> */}
        </div>
      );
    } else if ((this.props.pageId % 3) === 2) {
      return (
        <div className="App">
          <Header appName="Quizzy" />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <LoginBody /> */}
          <QuizBody questions={this.state.questions} />
        </div>
      );
    }

    return (
      <div className="App">
        <Header appName="Quizzy" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <LoginBody /> */}
        <LeaderBoard />
      </div>
    );
  }
}
const mapStatesToProps = state => ({
  name: state.name,
  pageId: state.pageId,
});


export default connect(mapStatesToProps, null)(App);
