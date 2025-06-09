import { FC, useEffect, useState } from 'react';
import { ProfileButton } from '../ProfileButton/ProfileButton.tsx';
import { getProfile } from '../../services/user.service.ts';
import styles from './UserShortInfo.module.scss';

export const UserShortInfo: FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    getProfile().then((res) => {
      setUserName(res.firstname as string);
      setPhoto(res.photo_url);
    });
  }, []);

  if (userName) {
    return (
      <div className={styles.userInfo}>
        <ProfileButton src={userPhoto} firstName={userName} />
      </div>
    );
  }
};
