import { type RouteObject } from 'react-router-dom';
import { IndexPage } from '../../pages/IndexPage';
import { AboutPage } from '../../pages/AboutPage';
import { MapPage } from '../../pages/MapPage';
import { MarketPage } from '../../pages/MarketPage';
import { MainLayout } from '../layouts/MainLayout';

export const routeConfig: RouteObject[] = [
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
    ],
  },
];
