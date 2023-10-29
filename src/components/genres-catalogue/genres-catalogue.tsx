import { IGenre } from '../../types/interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GenresCatalogueItem } from './genres-catalogue-item/genres-catalogue-item';
import { getFilmsByGenre, setActiveGenre } from '../../store/action';

interface GenresCatalogueProps {
  genres: IGenre[];
}

export const GenresCatalogue = ({genres}: GenresCatalogueProps) => {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();

  const handleGenresCatalogueItemClick = (genre: IGenre) => {
    dispatch(setActiveGenre({genre}));
    dispatch(getFilmsByGenre());
  };

  const genresCatalogueItems = genres.map((genre) => (
    <GenresCatalogueItem
      key={genre.id}
      genre={genre}
      isActive={genre.id === activeGenre.id}
      handleGenresCatalogueItemClick={handleGenresCatalogueItemClick}
    />
  ));

  return (
    <ul className="catalog__genres-list">
      {genresCatalogueItems}
    </ul>
  );
};
