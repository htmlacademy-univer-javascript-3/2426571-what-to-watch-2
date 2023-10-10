import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      films={films}
      promoFilmName='The Grand Budapest Hotel'
      promoFilmGenre='Drama'
      promoFilmReleaseDate={2014}
    />
  </React.StrictMode>
);
