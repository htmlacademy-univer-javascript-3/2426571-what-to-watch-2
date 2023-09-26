import './film-small-card.scss';

interface FilmSmallCardProps {
  filmName: string;
  filmImageSrc: string;
}

export const FilmSmallCard = ({filmName, filmImageSrc}: FilmSmallCardProps) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={filmImageSrc} alt={filmName} />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">{filmName}</a>
    </h3>
  </article>
);
