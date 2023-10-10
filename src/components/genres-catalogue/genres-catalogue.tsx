import { useState } from 'react';
import { IGenre } from '../../types/interfaces';
import { Link } from 'react-router-dom';

interface GenresCatalogueProps {
  genres: IGenre[];
}

export const GenresCatalogue = ({genres}: GenresCatalogueProps) => {
  const [activeGenreId, setActiveGenreId] = useState<number>(0);

  const genresCatalogueItems = genres.map((genre) => {
    const genreClassName = genre.id === activeGenreId ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item';

    return (
      <li className={genreClassName} key={genre.id}>
        <Link to='#' className="catalog__genres-link">{genre.name}</Link>
      </li>
    );
  });

  return (
    <ul className="catalog__genres-list">
      {genresCatalogueItems}
    </ul>
  );
};
