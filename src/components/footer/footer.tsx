import { memo } from 'react';
import { Logo } from '../logo/logo';

const FooterComponent = () => (
  <footer className="page-footer">
    <Logo logoClassName='logo__link--light' />

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export const Footer = memo(FooterComponent);
