import React, { Component } from 'react';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { Movie } from './types/movie';

interface AppState {
  movie: Movie;
}

class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      movie: {
        title: 'Інтерстеллар',
        director: 'Крістофер Нолан',
        year: 2014,
        studio: 'Warner Bros. / Paramount Pictures',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        description: 'Команда дослідників вирушає крізь червоточину в космосі, щоб забезпечити виживання людства.'
      }
    };
  }

  componentDidMount() {
    console.log('Компонент App змонтовано.');
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <Header title="🎬 Улюблений кінофільм" />
        <MovieCard movie={this.state.movie} />
      </div>
    );
  }
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '700px',
    margin: '40px auto',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.1)'
  }
};

export default App;