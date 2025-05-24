import { FC, useState } from 'react';
import styles from './LoginButton.module.scss';
import { Icon } from '../../../../shared/ui/Icon/Icon.tsx';
import { Typography } from '../../../../shared/ui/Typography/Typography.tsx';
import { Authentication } from '../../../../features/Authentication';

export const LoginButton: FC = () => {
  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);
  return (
    <>
      More actions
      <button
        className={styles.loginButton}
        onClick={() => setIsAuthModalOpened(true)}
      >
        <Icon name={'login'} />
        <Typography className={styles.title}>Войти</Typography>
      </button>
      <Authentication
        isOpened={isAuthModalOpened}
        onClose={() => setIsAuthModalOpened(false)}
      />
    </>
  );
};
