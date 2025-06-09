import { FC } from 'react';
import styles from './NavBannerBlock.module.scss';
import { NAV_BANNERS } from './constants';
import { NavBanner } from './components/NavBanner/NavBanner.tsx';
import { useBreakpoint } from '../../shared/context/BreakpointContext.tsx';

export const NavBannerBlock: FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <div
      className={styles.navBanners}
      style={{ marginTop: breakpoint === 'mobile' ? '287px' : '48px' }}
    >
      {NAV_BANNERS.map((slide, index) => (
        <NavBanner key={index} item={slide} />
      ))}
    </div>
  );
};
