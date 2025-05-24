import { FC, useEffect, useState } from 'react';
import { FormType } from './types';
import { Modal } from '../../shared/ui/Modal/Modal.tsx';
import { LoginForm } from './components/LoginForm/LoginForm.tsx';
import { RegisterForm } from './components/RegisterForm/RegisterForm.tsx';
import { FormLayout } from './layouts/FormLayout/FormLayout.tsx';
import { getProfile } from '../../entities/User/services/user.service.ts';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Authentication: FC<Props> = ({ isOpened, onClose }) => {
  useEffect(() => {
    getProfile().then(() => {
      onClose();
    });
  }, [isOpened]);
  const [formType, setFormType] = useState<FormType>('login');
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <FormLayout>
        More actions
        {formType === 'login' && <LoginForm setFormType={setFormType} />}
        {formType === 'register' && <RegisterForm setFormType={setFormType} />}
      </FormLayout>
    </Modal>
  );
};
