import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    const {title, rating, genre, actors, year} = this.props.movie;
    return (
      <a href="#" className="list-group-item Movie">{title}</a>
    );
  }
}