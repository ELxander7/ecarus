import { FC } from 'react';
import styles from './ProfileButton.module.scss';
import { Typography } from '../../../../shared/ui/Typography/Typography.tsx';
import { Avatar } from '../Avatar/Avatar.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  firstName: string;
  src: string | null;
}

export const ProfileButton: FC<Props> = ({ src, firstName }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile');
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      <Avatar size={24} src={src} />
      <Typography className={styles.name}>{firstName}</Typography>
    </button>
  );
};
