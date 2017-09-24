import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPlayer } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { selection: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ selection: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.getPlayer(this.state.selection);
    this.setState({ selection: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Type in player name"
          className="form-control"
          value={this.state.selection}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
