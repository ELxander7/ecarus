import { useRoutes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig.tsx';
import { type FC } from 'react';

export const AppRouter: FC = () => {
  return useRoutes(routeConfig);
};
