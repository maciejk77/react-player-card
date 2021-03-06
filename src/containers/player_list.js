import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Player</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(PlayerList);