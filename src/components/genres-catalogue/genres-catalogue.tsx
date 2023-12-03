import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmsByGenre, setActiveGenre } from '../../store/action';
import { ReducerName } from '../../types/enums';
import { IGenre } from '../../types/interfaces';
import { GenresCatalogueItem } from './genres-catalogue-item/genres-catalogue-item';

interface GenresCatalogueProps {
  genres: IGenre[];
}

const GenresCatalogueComponent = ({genres}: GenresCatalogueProps) => {
  const activeGenre = useAppSelector((state) => state[ReducerName.Films].activeGenre);
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

export const GenresCatalogue = memo(GenresCatalogueComponent);
