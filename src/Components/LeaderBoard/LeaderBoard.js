import React, { Component } from 'react';
import { connect } from 'react-redux';
import './leaderBoard.css';

class LeaderBoard extends Component {
  state = {
    toppers: [],
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
        console.log(topper.userName);
        return (
          <div className="topper-names">
            <div className="topper">{index}.{topper.userName}</div>
            <div className="topper-score">{topper.score}</div>
          </div>
        );
      });
    return (
      <div>
        <p>your score</p>
        <p>{this.props.score}</p>
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

