import { FC } from 'react';
import { Header } from '../../../widgets/Header/Header.tsx';
import { Footer } from '../../../widgets/Footer/Footer.tsx';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
