import React, { Component } from 'react';


import './question.css';

class Question extends Component {
  state = {
    score: 0,
  }
  selectedOption = (event) => {
    if (this.props.answer === event.target.value) {
      console.log(this.props.answer, event.target.value, this.state.score);
      this.setState({
        score: this.state.score + 1,
      });
      this.props.setScore();
    } else {
      console.log(this.props.answer, event.target.value, this.state.score);
    }
  };
  render() {
    const optionElements = Object.entries(this.props.options);
    const optElements = optionElements
      .map((option, index) => <div key={index}><input name={this.props.qid} onChange={e => this.selectedOption(e)} type="radio" value={option[1]} />{option[1]}</div>);
    return (

      <div className="container" >
        <div>question {this.props.num}</div>
        <div className="question-question">{this.props.quest}</div>
        {optElements}
      </div >
    );
  }
}

export default Question;

