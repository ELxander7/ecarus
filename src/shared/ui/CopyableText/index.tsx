import { type FC, type ReactNode, useState } from 'react';
import styles from './index.module.scss';

interface Props {
  text: string;
  children: ReactNode;
  className?: string;
}

export const CopyableText: FC<Props> = ({ text, children, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`${styles.copyButton} ${className}`}
    >
      {children}
      {copied && <span className={styles.tooltip}>Скопировано!</span>}
    </button>
  );
};
