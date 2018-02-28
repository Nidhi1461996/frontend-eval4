import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <b>{this.props.appName}</b>
          <span className="userName">Hello {this.props.name}</span>
        </header>
      </div>
    );
  }
}
const mapStatesToProps = state => ({
  name: state.name,
});
export default connect(mapStatesToProps, null)(Header);

