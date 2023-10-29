interface DetailsItemProps {
  itemName: string;
  itemValue: string;
}

export const DetailsItem = ({itemName, itemValue}: DetailsItemProps) => (
  <p className="film-card__details-item">
    <strong className="film-card__details-name">{itemName}</strong>
    <span className="film-card__details-value">{itemValue}</span>
  </p>
);
