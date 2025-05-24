import { FC } from 'react';
import { NavBanner as NavBannerType } from '../../types';
import styles from './NavBanner.module.scss';
import { Typography } from '../../../../shared/ui/Typography/Typography.tsx';
import { Button } from '../../../../shared/ui/Button/Button.tsx';
import { Icon } from '../../../../shared/ui/Icon/Icon.tsx';

interface Props {
  item: NavBannerType;
}

export const NavBanner: FC<Props> = ({ item }) => {
  return (
    <div
      className={styles.navBanner}
      style={{
        backgroundImage: item.backgroundImage
          ? `url(/assets/images/banners/${item.backgroundImage})`
          : 'none',
        backgroundSize: item.backgroundSize || '300px 300px',
        backgroundPosition: item.backgroundPosition || 'top right',
      }}
    >
      <div className={styles.content}>
        <div>
          <Typography variant={'h3'}>{item.title}</Typography>
          <Typography className={styles.description} variant={'p'}>
            {item.description}
          </Typography>
        </div>
        <Button className={styles.button} style={'secondary'}>
          <Icon name={'arrow'} />
        </Button>
      </div>
    </div>
  );
};
