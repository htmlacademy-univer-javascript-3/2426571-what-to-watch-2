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
      promoFilmName='The Grand Budapest Hotel'
      promoFilmGenre={Genre.Drama}
      promoFilmReleaseDate='2014'
    />
  </React.StrictMode>
);
