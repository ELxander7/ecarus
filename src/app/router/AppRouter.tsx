import { useRoutes } from 'react-router-dom';
import { FC } from 'react';
import { RouteObject } from 'react-router-dom';
import { IndexPage } from '../../pages/IndexPage/IndexPage.tsx';
import { AboutPage } from '../../pages/AboutPage/AboutPage.tsx';
import { MapPage } from '../../pages/MapPage/MapPage.tsx';
import { MarketPage } from '../../pages/MarketPage/MarketPage.tsx';
import { MainLayout } from '../layouts/MainLayout/MainLayout.tsx';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage.tsx';

const routeConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <IndexPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/map',
        element: <MapPage />,
      },
      {
        path: '/market',
        element: <MarketPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
    ],
  },
];

export const AppRouter: FC = () => useRoutes(routeConfig);
