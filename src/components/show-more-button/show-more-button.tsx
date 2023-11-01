interface ShowMoreButtonProps {
  isVisible: boolean;
  handleShowMoreButtonClick: () => void;
}

export const ShowMoreButton = ({isVisible, handleShowMoreButtonClick}: ShowMoreButtonProps) => {
  if (isVisible) {
    return (
      <div className="catalog__more">
        <button onClick={() => handleShowMoreButtonClick()} className="catalog__button" type="button">Show more</button>
      </div>
    );
  }
  return null;
};
