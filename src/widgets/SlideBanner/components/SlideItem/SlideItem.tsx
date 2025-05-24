import { FC } from 'react';
import { SlideItem as SlideItemType } from '../../types';
import styles from './SlideItem.module.scss';
import { Typography } from '../../../../shared/ui/Typography/Typography.tsx';
import { Button } from '../../../../shared/ui/Button/Button.tsx';

interface Props {
  item: SlideItemType;
}

export const SlideItem: FC<Props> = ({ item }) => {
  return (
    <div
      className={styles.slideItem}
      style={{
        backgroundColor: item.backgroundColor,
        backgroundImage: item.backgroundImage
          ? `url(/assets/images/banners/${item.backgroundImage})`
          : 'none',
        backgroundSize: item.backgroundSize || '560px 320px',
        backgroundPosition: item.backgroundPosition || 'top right',
      }}
    >
      <div className={styles.content}>
        <div>
          More actions
          <Typography variant={'h1'}>{item.title}</Typography>
          <Typography className={styles.description} variant={'p'}>
            {item.description}
          </Typography>
        </div>
        <Button className={styles.button} style={'primary'}>
          {item.buttonText}
        </Button>
      </div>
    </div>
  );
};
