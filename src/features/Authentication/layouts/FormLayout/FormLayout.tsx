import { FC, ReactNode } from 'react';
import styles from './FormLayout.module.scss';

interface Props {
  children: ReactNode;
}

export const FormLayout: FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
