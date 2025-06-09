import { FC } from 'react';
import styles from './Avatar.module.scss';

interface Props {
  size: number;
  src: string | null;
}

export const Avatar: FC<Props> = ({ size, src }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  const defaultPhoto: string =
    'https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg';

  return (
    <div className={styles.avatar} style={style}>
      <img
        src={src || defaultPhoto}
        alt="Avatar"
        className={styles.avatar__image}
        style={style}
      />
    </div>
  );
};
