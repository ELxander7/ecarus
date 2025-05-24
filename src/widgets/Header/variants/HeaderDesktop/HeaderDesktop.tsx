import { FC, useEffect, useState } from 'react';
import styles from './HeaderDesktop.module.scss';
import { LinkLogo } from '../../components/LinkLogo/LinkLogo.tsx';
import { NavLink } from './components/NavLink/NavLink.tsx';
import { LoginButton } from '../../components/LoginButton/LoginButton.tsx';
import { UserShortInfo } from '../../../../entities/User/components/UserShortInfo/UserShortInfo.tsx';
import { pages } from '../../constants';
import { useLocation } from 'react-router-dom';

export const HeaderDesktop: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSelected = (path: string) => currentPath === path;

  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setHasToken(!!token);
  }, []);

  return (
    <header className={styles.headerDesktop}>
      <nav className={styles.nav}>
        <LinkLogo />
        <ul className={styles.navList}>
          {pages.map((page) => (
            <li key={page.url} className={styles.navList__item}>
              <NavLink
                url={page.url}
                text={page.text}
                selected={isSelected(page.url)}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.info}>
        {hasToken ? <UserShortInfo /> : <LoginButton />}
      </div>
    </header>
  );
};
