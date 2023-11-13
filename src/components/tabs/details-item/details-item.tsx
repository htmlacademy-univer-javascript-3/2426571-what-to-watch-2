interface DetailsItemProps {
  name: string;
  value: string | JSX.Element[];
}

export const DetailsItem = ({name, value}: DetailsItemProps) => (
  <p className="film-card__details-item">
    <strong className="film-card__details-name">{name}</strong>
    <span className="film-card__details-value">{value}</span>
  </p>
);
