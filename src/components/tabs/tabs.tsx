import { useState } from 'react';
import { IFilm, IReview } from '../../types/interfaces';
import { ActiveTab } from './active-tab/active-tab';

interface TabsProps {
  film: IFilm;
  reviews: IReview[];
}

const TABS = ['Overview', 'Details', 'Reviews'];

export const Tabs = ({film, reviews}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>('Overview');

  const navigationItems = TABS.map((tab) => (
    <li className={`film-nav__item ${activeTab === tab ? 'film-nav__item--active' : ''}`} key={tab}>
      <a onClick={() => setActiveTab(tab)} className="film-nav__link">{tab}</a>
    </li>
  ));

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={`${film.name} poster`} />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              {navigationItems}
            </ul>
          </nav>

          <ActiveTab activeTab={activeTab} film={film} reviews={reviews} />
        </div>
      </div>
    </div>
  );
};
