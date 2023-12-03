import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../types/enums';

interface LogoProps {
  logoClassName?: string;
}

export const LogoComponent = ({logoClassName}: LogoProps) => (
  <div className="logo">
    <Link className={`logo__link ${logoClassName ?? ''}`} to={RoutePath.Main}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export const Logo = memo(LogoComponent);
