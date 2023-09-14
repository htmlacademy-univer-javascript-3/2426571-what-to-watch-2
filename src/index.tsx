import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Genre } from './types/genre.enum';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
      promoMovieName='The Grand Budapest Hotel'
      promoMovieGenre={Genre.Drama}
      promoMovieReleaseDate='2014'
    />
  </React.StrictMode>
);
