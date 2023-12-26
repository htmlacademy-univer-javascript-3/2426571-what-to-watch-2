import './loading-screen.scss';

export const LoadingScreen = () => (
  <div className="loading-screen">
    <svg className="spinner" viewBox="0 0 50 50" role="spinner">
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  </div>
);
