import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList ({ contacts, onDelete }) {
  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};
