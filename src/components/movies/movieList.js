import React, { Component } from 'react'

export default class MovieList extends Component {
  componentWillMount() {
    this.props.getMovies()
  }

  render() {
    const { movies } = this.props

    return (
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <span>
              Title: {movie.title} Year: {movie.year}
            </span>
          </div>
        ))}
      </div>
    )
  }
}
