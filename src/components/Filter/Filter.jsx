import React, { Component } from 'react';

class Filter extends Component {
  handleChange = e => {
    this.props.onChangeFilter(e.target.value);
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <label>
          Filter contacts by name:
          <input type="text" value={value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default Filter;
