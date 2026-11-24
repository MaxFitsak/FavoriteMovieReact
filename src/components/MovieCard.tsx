import React, { Component } from 'react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

class MovieCard extends Component<MovieCardProps> {
  render() {
    const { movie } = this.props;

    return (
      <div style={styles.card}>
        <img
          src={movie.poster}
          alt={movie.title}
          style={styles.poster}
        />
        <div style={styles.content}>
          <h2 style={styles.movieTitle}>
            {movie.title} <span style={styles.year}>({movie.year})</span>
          </h2>
          <p style={styles.meta}><strong>Режисер:</strong> {movie.director}</p>
          <p style={styles.meta}><strong>Кіностудія:</strong> {movie.studio}</p>
          <p style={styles.description}>{movie.description}</p>
        </div>
      </div>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    gap: '20px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
    textAlign: 'left'
  },
  poster: {
    width: '180px',
    height: '270px',
    objectFit: 'cover',
    borderRadius: '8px',
    flexShrink: 0
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1
  },
  movieTitle: {
    margin: '0 0 12px 0',
    fontSize: '22px',
    color: '#0f172a'
  },
  year: {
    color: '#64748b',
    fontWeight: 'normal'
  },
  meta: {
    margin: '5px 0',
    color: '#334155',
    fontSize: '15px'
  },
  description: {
    marginTop: '12px',
    color: '#475569',
    lineHeight: '1.5',
    fontSize: '14px'
  }
};

export default MovieCard;