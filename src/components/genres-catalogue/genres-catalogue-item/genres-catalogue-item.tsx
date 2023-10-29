import { IGenre } from '../../../types/interfaces';

interface GenresCatalogueItemProps {
  genre: IGenre;
  isActive: boolean;
  handleGenresCatalogueItemClick: (genre: IGenre) => void;
}

export const GenresCatalogueItem = ({genre, isActive, handleGenresCatalogueItemClick}: GenresCatalogueItemProps) => (
  <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`} key={genre.id}>
    <div onClick={() => handleGenresCatalogueItemClick(genre)} className="catalog__genres-link">{genre.name}</div>
  </li>
);
