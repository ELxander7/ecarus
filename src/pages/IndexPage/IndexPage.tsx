import { FC } from 'react';
import { SlideBanner } from '../../widgets/SlideBanner/SlideBanner.tsx';
import { NavBannerBlock } from '../../widgets/NavBannerBlock/NavBannerBlock.tsx';

export const IndexPage: FC = () => {
  return (
    <>
      <SlideBanner />
      <NavBannerBlock />
    </>
  );
};
