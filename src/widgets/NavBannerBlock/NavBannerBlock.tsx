import { FC } from 'react';
import styles from './NavBannerBlock.module.scss';
import { NAV_BANNERS } from './constants';
import { NavBanner } from './components/NavBanner/NavBanner.tsx';

export const NavBannerBlock: FC = () => {
  return (
    <div className={styles.navBannerBlock}>
      {NAV_BANNERS.map((slide, index) => (
        <NavBanner key={index} item={slide} />
      ))}
    </div>
  );
};
