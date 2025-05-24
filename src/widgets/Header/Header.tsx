import { FC } from 'react';
import { useBreakpoint } from '../../shared/hooks/useBreakpoints.ts';
import { HeaderMobile } from './variants/HeaderMobile/HeaderMobile.tsx';
import { HeaderDesktop } from './variants/HeaderDesktop/HeaderDesktop.tsx';

export const Header: FC = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile' ? <HeaderMobile /> : <HeaderDesktop />;
};
