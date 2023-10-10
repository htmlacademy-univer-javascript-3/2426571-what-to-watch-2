import { Link } from 'react-router-dom';

interface ButtonProps {
  buttonClassName: string;
  buttonLink: string;
  svgHref: string;
  children?: JSX.Element;
}

export const Button = ({buttonClassName, buttonLink, svgHref, children}: ButtonProps) => (
  <Link to={buttonLink} className={`btn ${buttonClassName} film-card__button`}>
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref={svgHref}></use>
    </svg>
    {children}
  </Link>
);
