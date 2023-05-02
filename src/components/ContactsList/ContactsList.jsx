import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.length !== 0 &&
        contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
