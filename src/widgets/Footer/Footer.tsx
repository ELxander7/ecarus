import { FC } from 'react';
import styles from './Footer.module.scss';
import { contacts } from './constants/contacts.ts';
import { CopyableText } from '../../shared/ui/CopyableText/CopyableText.tsx';
import { ContactInfo } from './components/ContactInfo/ContactInfo.tsx';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <li key={contact.title} className={styles.contactList__item}>
            <CopyableText text={contact.toCopy}>
              <ContactInfo title={contact.title} icon={contact.icon} />
            </CopyableText>
          </li>
        ))}
      </ul>
    </footer>
  );
};
