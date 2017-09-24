import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayer } from '../actions/index';

class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = { selection: 'Alderweireld' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selection: event.target.value });
  }

  render() {
    this.props.getPlayer(this.state.value);

    return (
      <select value={this.state.selection} onChange={this.handleChange}>
        <option value="Alderweireld">Alderweireld</option>
        <option value="Rooney">Rooney</option>
        <option value="Mertesacker">Mertesacker</option>
        <option value="Mahrez">Mahrez</option>
        <option value="Touré">Touré</option>
      </select>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchList);
