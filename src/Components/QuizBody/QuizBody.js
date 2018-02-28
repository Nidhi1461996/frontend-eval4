import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Question from '../Question/Question';

import { dispatchScoreAction, dispatchPageAction } from '../../redux/actions';

import './quizBody.css';

class QuizBody extends Component {
  state = {
    score: 0,
    disabled: true,
    markedAns: [],
  }
  setScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  }
  setDisabled = () => {
    this.setState({
      disabled: false,
    });
  }
  setMarkedAns = (currentAns) => {
    this.setState({
      markedAns: this.state.markedAns.concat(currentAns),
    });
    console.log(this.state.markedAns.length);
    if (this.state.markedAns.length === 1) {
      this.setState({
        disabled: false,
      });
    }
  }
  displayScore = () => {
    fetch(`/user/insert/${this.props.name}/${this.state.score}`).then(() => {
      axios.post(`/user/history/${this.props.name}`, {
        answer: (this.state.markedAns),
      });
    });
    this.props.dispatchScore(this.state.score);
    this.props.dispatchPageId(3);
  }
  render() {
    const questionElements = this.props.questions
      .map((ques, index) =>
        // console.log(ques.question);
        (<Question
          num={index}
          qid={ques.id}
          quest={ques.question}
          options={ques.options}
          answer={ques.answer}
          setScore={this.setScore}
          setMarkedAns={this.setMarkedAns}
        />));
    return (
      <div className="Quiz-body-container" >
        <div>
          {questionElements}
        </div>
        <center><button onClick={this.displayScore} className="calculate" disabled={this.state.disabled}>calculate</button></center>
      </div>
    );
  }
}
// const mapStatesToProps = state => ({

// });
const mapStatesToProps = state => ({
  name: state.name,
});
const mapDispatchToProps = dispatch => ({
  dispatchScore: score => dispatch(dispatchScoreAction(score)),
  dispatchPageId: page => dispatch(dispatchPageAction(page)),
});

export default connect(mapStatesToProps, mapDispatchToProps)(QuizBody);

