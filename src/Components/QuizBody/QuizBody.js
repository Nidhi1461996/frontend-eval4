import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../Question/Question';
import { dispatchScoreAction, dispatchPageAction } from '../../redux/actions';
import './quizBody.css';

class QuizBody extends Component {
  state = {
    score: 0,
    disabled: true,
  }
  setScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  }
  setDisabled = () => {
    this.setState({
      disabled: true,
    });
  }
  displayScore = () => {
    fetch(`/user/insert/${this.props.name}/${this.state.score}`).then(() => {
      this.props.dispatchScore(this.state.score);
      this.props.dispatchPageId(3);
    });
  }
  render() {
    const questionElements = this.props.questions
      .map((ques, index) => {
        console.log(ques.question);
        return (<Question
          num={index}
          key={ques.id}
          quest={ques.question}
          options={ques.options}
          answer={ques.answer}
          setScore={this.setScore}
        />);
      });
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

