import React, { Component } from 'react';
import { connect } from 'react-redux';
import './leaderBoard.css';

class LeaderBoard extends Component {
  state = {
    toppers: [],
    class: 'topper',
  }
  componentDidMount() {
    fetch(`/user/${this.props.name}/toppers`)
      .then(result => result.json())
      .then((data) => {
        this.setState({
          toppers: data,
        });
      });
  }

  render() {
    const leaders = this.state.toppers
      .map((topper, index) => {
        console.log(this.props.name);
        // if (topper.userName === this.props.name) {
        //   this.setState({
        //     class: 'highlight',
        //   });
        // }
        return (
          <div className="topper-names">
            <div className={this.state.class}>{index + 1}.{topper.userName}</div>
            <div className="topper-score">{topper.score}</div>
          </div>
        );
      });
    return (
      <div>
        <p className="score">Your score</p>
        <p className="score">{this.props.score}</p>
        <div>
          {leaders}
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  score: state.score,
  name: state.name,
});
export default connect(mapStatesToProps, null)(LeaderBoard);

