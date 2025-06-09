import { FC } from 'react';
import { NavBanner as NavBannerType } from '../../types';
import styles from './NavBanner.module.scss';
import { Typography } from '../../../../shared/ui/Typography/Typography.tsx';
import { Button } from '../../../../shared/ui/Button/Button.tsx';
import { Icon } from '../../../../shared/ui/Icon/Icon.tsx';
import { useBreakpoint } from '../../../../shared/context/BreakpointContext.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  item: NavBannerType;
}

export const NavBanner: FC<Props> = ({ item }) => {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  return (
    <div
      className={styles.navBannerItem}
      style={{
        backgroundImage: item.backgroundImage
          ? `url(/assets/images/banners/${item.backgroundImage})`
          : 'none',
        backgroundSize: item.backgroundSize || '50% auto',
        backgroundPosition: item.backgroundPosition || 'bottom right',
        height: breakpoint === 'mobile' ? '280px' : '300px',
        flex: breakpoint === 'mobile' ? '0 0 100%' : '1 1 400px',
      }}
    >
      <div className={styles.content}>
        <div>
          <Typography variant={'h3'}>{item.title}</Typography>
          <Typography className={styles.description} variant={'p'}>
            {item.description}
          </Typography>
        </div>
        <Button
          className={styles.button}
          variant={'secondary'}
          onClick={() => navigate(item.link)}
        >
          <Icon name={'arrow'} />
        </Button>
      </div>
    </div>
  );
};
