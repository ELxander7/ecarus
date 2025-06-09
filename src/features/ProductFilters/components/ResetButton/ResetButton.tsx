import styles from './index.module.scss';
import { Button } from '../../../../shared/ui/Button/Button.tsx';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetFilters } from '../../slices';

export const ResetButton: FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant={'secondary'}
      className={styles.resetButton}
      onClick={() => resetFilters(navigate)}
    >
      Сбросить фильтры
    </Button>
  );
};
