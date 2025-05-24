import React from 'react';
import {
  Controller,
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import styles from './InputWithFormatter.module.scss';
import { Typography } from '../../../../../shared/ui/Typography/Typography.tsx';

interface InputWithFormatterProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  label: string;
  control: Control<TFieldValues>;
  format?: (value: string) => string;
  error?: FieldError;
  rules?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  type?: string;
}

export const InputWithFormatter = <TFieldValues extends FieldValues>({
  name,
  label,
  control,
  format,
  error,
  rules,
  type = 'text',
}: InputWithFormatterProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur, ref } }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const inputVal = e.target.value;
          onChange(format ? format(inputVal) : inputVal);
        };

        return (
          <div className={styles.inputContainer}>
            <div
              className={
                (styles.inputWrapper, error && styles.inputWrapper_error)
              }
            >
              <input
                id={name}
                type={type}
                value={value || ''}
                onChange={handleChange}
                onBlur={onBlur}
                ref={ref}
                placeholder={' '}
                className={styles.inputField}
              />
              <label htmlFor={name} className={styles.floatingLabel}>
                {label}
              </label>
            </div>
            {error?.message && (
              <Typography variant="p" className={styles.inputErrorMessage}>
                {String(error.message)}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
};
