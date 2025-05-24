import { FC } from 'react';

interface Props {
  name: string;
  size?: { width: number; height: number };
  className?: string;
}

export const Icon: FC<Props> = ({
  size = { width: 24, height: 24 },
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: size.width,
        height: size.height,
      }}
      className={className}
    ></svg>
  );
};
