import { FC } from 'react';
import styles from './Footer.module.scss';
import { contacts } from './constants/contacts.ts';
import { ContactInfo } from './components/ContactInfo/ContactInfo.tsx';
import { useBreakpoint } from '../../shared/context/BreakpointContext.tsx';

export const Footer: FC = () => {
  const breakpoint = useBreakpoint();
  return (
    <footer
      className={styles.footer}
      style={{
        padding: breakpoint === 'mobile' ? '24px 0' : '',
      }}
    >
      <ul
        className={styles.contactList}
        style={{
          flexDirection: breakpoint === 'mobile' ? 'column' : 'row',
        }}
      >
        {contacts.map((contact) => (
          <li key={contact.title} className={styles.contactList__item}>
            <ContactInfo title={contact.title} icon={contact.icon} />
          </li>
        ))}
      </ul>
    </footer>
  );
};
